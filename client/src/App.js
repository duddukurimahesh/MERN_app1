import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import UserProfile from './UserProfile'; 

const APP = () => {
  return (

    <div>
      
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/dashboard" exact component = {Dashboard}/>
            <Route path="/myprofile" exact component = {Myprofile}/>
            <Route path="/userProfile/:firstName/:lastName/:email/:mobileNum/:skills" exact component = {UserProfile}/>
        </Switch>
      </BrowserRouter>

    </div>

  )
}
export default APP;
