import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Login from './Login'

export default class Home extends Component {

  render(){
      return(
          <div>
              {localStorage.getItem('token') ? (<Redirect to={{pathname: '/Posts'}} />) : (<Login />)}
          </div>
      )
  }

}