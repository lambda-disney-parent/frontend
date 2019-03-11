import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import {Link} from 'react-router-dom';
import './login.css'
import Axios from 'axios';



class LoginForm extends Component {
    state={
        username: '',
        password: '',
        accountType: ''
    }

    componentDidMount(){
        
    }

    changeHandler(){

    }

    submitHandler(e){
        e.preventDefault()
        axios 
            .post('https://disney-parent.herokuapp.com/api/auth/register', {
                username: this.state.username,
                password: this.state.password,
                accountType: this.state.accountType
            })
            .then(res => {
                this.setState({
                    

                })
            })
    }

    render(){
        return(
    
            <Container className="App">
            <h2 className='display-4 h2'>Sign In</h2>
            <Form className="form" onSubmit={this.submitHandler}>
                <Col>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                    type="useername"
                    name="username"
                    id="exampleUser"
                    placeholder="Username"
                    onChange= {this.changeHandler}
                    />
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    onChange= {this.changeHandler}
                    />
                </FormGroup>
                </Col>
                <Link to='/'><Button className='btn btn-primary btn-lg'>Submit</Button></Link>
            </Form>
            </Container>
        )
    }
}

export default LoginForm;
