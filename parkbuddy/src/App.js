import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import Jumbotron from './components/Jumbotron'
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Jumbotron />
        <Login />
      </div>
      </Router>
    );
  }
}

export default App;
