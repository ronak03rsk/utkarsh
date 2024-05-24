import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Task List</h1>
            <Link to="/add-task">Add Task</Link>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <Link to={`/task/${task._id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
