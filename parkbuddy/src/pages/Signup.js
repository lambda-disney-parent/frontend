import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import axios from 'axios';
import './signup.css'

class Signup extends Component {
    state={
        username: '',
        password: '',
        accountType: ''
    }

    componentDidMount(){
        
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    submitHandler(e){
        e.preventDefault();
        axios 
            .post('https://disney-parent.herokuapp.com/api/auth/register', {
                username: this.state.username,
                password: this.state.password,
                accountType: this.state.accountType
            })
            .then(res => {
                console.log(res)
                // localStorage.setItem('token', res.token)
            })
            .catch(err=> console.log(err))
    }
    render(){
        return(
            <Container className="App Sign-up">
            <h2 className='display-4 h2'>Register</h2>
            <Form className="form">
                <Col>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                    type="useername"
                    name="username"
                    id="exampleUser"
                    placeholder="Username"
                    onChange={this.changeHandler}
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
                    onChange={this.changeHandler}
                    />
                </FormGroup>
                </Col>
                <Button onSubmit={() => this.submitHandler} className='btn btn-primary btn-lg'>Submit</Button>
            </Form>
            </Container>
        )
    }
}

export default Signup