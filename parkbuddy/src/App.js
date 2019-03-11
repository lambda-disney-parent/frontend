import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Users, Posts, Profile} from './pages/Profile'


class App extends Component {
  state={
    loggedIn: false
  }
  

  render() {
    return (
      <div>
        <Login />
        <Route exact path='/'component={Login}/>
        <Route path='/Profile'component={Profile}/>
        <Route path='/Users'component={Users}/>
        <Route path='/Posts'component={Posts}/>
      </div>
    );
  }
}

export default App;
