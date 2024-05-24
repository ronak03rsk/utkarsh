import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './pages/TaskList';

import TaskDetail from './pages/TaskDetail';
import TaskForm from './pages/TaskForm';
//hello
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={TaskList} />
                    <Route path="/task/:id" component={TaskDetail} />
                    <Route path="/add-task" component={TaskForm} />
                    <Route path="/edit-task/:id" component={TaskForm} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
