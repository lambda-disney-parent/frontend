import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import {Route, Switch} from 'react-router-dom';
import Posts from './pages/Posts';
import Auth from './components/Auth';
import Home from './pages/Home';
import RequestForm from './pages/RequestForm';
import axios from 'axios'



axios.defaults.withCredentials = true;

class App extends Component {
  state={
    loggedIn: false,
    loginForm: true
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
  }

  logout = () => {
    this.setState({
      loggedIn:false
    })
  }

  render() {
    return (
      <Switch>
        <Route path ='/' exact component={Home}></Route>
        <Route path ='/login' component ={Login}></Route>
        <Auth>
        <Route path ='/posts' component ={Posts}></Route>
        <Route path ='/request' component={RequestForm}></Route>
        </Auth>
      </Switch>
    );
  }
}

export default App;
