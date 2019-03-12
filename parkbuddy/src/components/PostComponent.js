import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './postcomponent.css'

export default class PostComponent extends React.Component {
  render() {
    return (
        <Container>
      <Form className="spaced">
        <FormGroup>
          <Label for="postRequest">Request</Label>
          <Input type="text" name="text" id="post" placeholder="Post Request" />
        </FormGroup>
        <FormGroup>
          <Label for="numberOfKids">numberOfKids</Label>
          <Input type="select" name="select" id="numberOfKids">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Where are you?"/>
        </FormGroup>
        <div className="center">
        <Button className="center">Submit</Button>
        </div>
      </Form>
      </Container>
    );
  }
}