import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import {Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Signup from './pages/Signup'



class App extends Component {
  state={
    loggedIn: false
  }
  

  render() {
    return (
      <div>
        <Login />
        <Route exact path='/'component={Login}/>
        <Route path='/Signup'component={Signup}/>
        <Route path='/Profile'component={Profile}/>
        <Route path='/Users'component={Users}/>
        <Route path='/Posts'component={Posts}/>
      </div>
    );
  }
}

export default App;
