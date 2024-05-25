// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams, useHistory } from 'react-router-dom';

// const TaskDetail = () => {
//     const { id } = useParams();
//     const history = useHistory();
//     const [task, setTask] = useState(null);

//     useEffect(() => {
//         axios.get(`/api/tasks/${id}`)
//             .then(response => setTask(response.data))
//             .catch(error => console.log(error));
//     }, [id]);

//     const handleDelete = () => {
//         axios.delete(`/api/tasks/${id}`)
//             .then(() => history.push('/'))
//             .catch(error => console.log(error));
//     };

//     if (!task) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>{task.title}</h1>
//             <p>{task.description}</p>
//             <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
//             <Link to={`/edit-task/${task._id}`}>Edit</Link>
//             <button onClick={handleDelete}>Delete</button>
//         </div>
//     );
// };

// export default TaskDetail;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const TaskDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        axios.get(`/api/tasks/${id}`)
            .then(response => setTask(response.data))
            .catch(error => console.log(error));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`/api/tasks/${id}`)
            .then(() => navigate('/'))
            .catch(error => console.log(error));
    };

    if (!task) return <div>Loading...</div>;

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
            <Link to={`/edit-task/${task._id}`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskDetail;