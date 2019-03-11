import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login, Users, Posts, Volunteers, Posts} from './pages/Profile'


const url = 'https://disney-parent.herokuapp.com/api/'

class App extends Component {
  state={
    loggedIn: false,
    volunteers: [],
    parents: [],
    posts: [],
    comments: []
  }
  

  render() {
    return (
      <Router>
      <div>
        <Route exact path='/'component={Login}/>
        <Route path='/Profile'component={Profile}/>
        <Route path='/Users'component={Users}/>
        <Route path='/Posts'component={Posts}/>
      </div>
      </Router>
    );
  }
}

export default App;
