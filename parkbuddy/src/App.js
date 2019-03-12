import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import {Route, Switch} from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Auth from './components/Auth';
import Home from './pages/Home'



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
        <Route path ='/users' component ={Users}></Route>
        <Route path ='/posts' component ={Posts}></Route>
        </Auth>
      </Switch>
    );
  }
}

export default App;
