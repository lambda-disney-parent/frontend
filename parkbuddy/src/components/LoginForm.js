import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import './login.css'
import axios from 'axios';
import {withRouter} from 'react-router-dom';



class LoginForm extends Component {
    constructor(props){
        super(props);
    this.state={
        username: '',
        password: '',
        accountType: ''
    }
}


    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler(e){
        e.preventDefault()
        axios 
            .post('https://disney-parent.herokuapp.com/api/auth/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log(res)
                const token = res.data.token
                localStorage.setItem('token', token)
                console.log(token)
                this.props.history.push('/Posts')
                axios
                    .get('https://disney-parent.herokuapp.com/api/users', {headers: {Authorization: token}} )
                    .then(res => {
                        console.log(res); 
                        }
                        )
                    .catch(err=> console.log(err))
            })
    }


    render(){
        return(
            <Container className="App">
            <h2 className='display-4 h2'>Sign In</h2>
            <Form className="form" onSubmit={(e) => this.submitHandler(e)}>
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
                <Button className='btn btn-primary btn-lg'>Submit</Button>
            </Form>
            </Container>
        )
    }
}

export default withRouter(LoginForm);
