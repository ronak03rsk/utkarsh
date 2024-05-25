// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useHistory } from 'react-router-dom';

// const TaskForm = () => {
//     const { id } = useParams();
//     const history = useHistory();
//     const [task, setTask] = useState({
//         title: '',
//         description: '',
//         deadline: '',
//         email: ''
//     });

//     useEffect(() => {
//         if (id) {
//             axios.get(`/api/tasks/${id}`)
//                 .then(response => setTask(response.data))
//                 .catch(error => console.log(error));
//         }
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTask({ ...task, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const submitRequest = id ? axios.put(`/api/tasks/${id}`, task) : axios.post('/api/tasks', task);
//         submitRequest.then(() => history.push('/')).catch(error => console.log(error));
//     };

//     return (
//         <div>
//             <h1>{id ? 'Edit Task' : 'Add Task'}</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Title:
//                     <input type="text" name="title" value={task.title} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Description:
//                     <textarea name="description" value={task.description} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Deadline:
//                     <input type="datetime-local" name="deadline" value={task.deadline} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={task.email} onChange={handleChange} required />
//                 </label>
//                 <button type="submit">Save</button>
//             </form>
//         </div>
//     );
// };

// export default TaskForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TaskForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({
        title: '',
        description: '',
        deadline: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`/api/tasks/${id}`)
                .then(response => setTask(response.data))
                .catch(error => console.log(error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitRequest = id ? axios.put(`/api/tasks/${id}`, task) : axios.post('/api/tasks', task);
        submitRequest.then(() => navigate('/')).catch(error => console.log(error));
    };

    return (
        <div>
            <h1>{id ? 'Edit Task' : 'Add Task'}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={task.title} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={task.description} onChange={handleChange} required />
                </label>
                <label>
                    Deadline:
                    <input type="datetime-local" name="deadline" value={task.deadline} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={task.email} onChange={handleChange} required />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default TaskForm;