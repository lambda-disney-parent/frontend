import React, {Component} from 'react';
import LoginForm from '../components/LoginForm'
import Jumbotron1 from '../components/Jumbotron1'
import Signup from './Signup'


  class Login extends Component {
    constructor(props){
      super(props)
    this.state={
        loginForm:true,
        visible: true
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
          <Jumbotron1 toggle={this.toggle} loginForm={this.state.loginForm}/>
          {this.state.loginForm ?  <LoginForm history={this.props.history}/> : <Signup toggle={this.toggle}/>}
        </div>
      );
    }
  }


  export default Login