import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <h2>Leave Management System</h2>
                    <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/add'}>Add</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/add" component={add}/>
                </Switch>
                </div>
            </Router>
        );
    }
}