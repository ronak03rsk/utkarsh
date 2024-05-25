// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import TaskList from './pages/TaskList';

// import TaskDetail from './pages/TaskDetail';
// import TaskForm from './pages/TaskForm';
// //hello
// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Switch>
//                     <Route path="/" exact component={TaskList} />
//                     <Route path="/task/:id" component={TaskDetail} />
//                     <Route path="/add-task" component={TaskForm} />
//                     <Route path="/edit-task/:id" component={TaskForm} />
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './pages/TaskList';
import TaskDetail from './pages/TaskDetail';
import TaskForm from './pages/TaskForm';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/task/:id" element={<TaskDetail />} />
                    <Route path="/add-task" element={<TaskForm />} />
                    <Route path="/edit-task/:id" element={<TaskForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;