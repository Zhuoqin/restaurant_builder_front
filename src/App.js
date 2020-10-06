import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom"
import Landing from "./landing/Landing";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Profile from "./Service/Profile";


function App(){
    return(
        <Router>
            <div>
                <Link to="/">Home</Link> {'    |    '}
                <Link to="/register">Register </Link> {'    |    '}
                <Link to="/login">Login </Link> {'    |    '}
                <Link to="/users/me">Profile </Link> {'    |    '}

            </div>

            <Switch>
                <Route path="/" exact>
                   <Landing/>
                </Route>

                <Route path="/register">
                    <Register/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/users/me">
                    <Profile/>
                </Route>

            </Switch>
        </Router>
    )

}
export default App;