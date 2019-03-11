import React, {Component} from 'react';
import LoginForm from '../components/LoginForm'
import Jumbotron from '../components/Jumbotron'
import Signup from './Signup'


  class Login extends Component {
    constructor(props){
      super(props)
    this.state={
        loginForm:true
          }
    }
    toggle = () => {
      this.setState({
        loginForm:!this.state.loginForm
      })
    }
    render() {
      return (
        <div>
          <Jumbotron toggle={this.toggle} login={this.state.loginForm}/>
          {this.state.loginForm === true ?  <LoginForm history={this.props.history}/> : <Signup toggle={this.toggle}/>}
        </div>
      );
    }
  }


  export default Login