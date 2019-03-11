import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import {Link} from 'react-router-dom';
import './login.css'


  class Login extends Component {
    render() {
      return (
        <Container className="App">
          <h2 className='display-4 h2'>Sign In</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="useername"
                  name="username"
                  id="exampleUser"
                  placeholder="Username"
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
                />
              </FormGroup>
            </Col>
            <Link to='/'><Button className='btn btn-primary btn-lg'>Submit</Button></Link>
          </Form>
        </Container>
      );
    }
  }

  export default Login