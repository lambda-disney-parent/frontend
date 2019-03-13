import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './postcomponent.css';
import axios from 'axios'
import Post from '../pages/Post';

class PostComponent extends React.Component {

  state={
      title: '',
      time: '',
      meetingPlace: '',
      numOfKids: ''
    }
  
  addPost = (post) => {
    axios
      .post('https://disney-parent.herokuapp.com/api/posts', post)
      .then(res=> 
          console.log(res))
      .catch(err => console.log(err))
}

// updatePost = (e, id) => {
//   e.preventDefault();
//   axios 
//     .put(`https://disney-parent.herokuapp.com/api/posts/${id}`)
//     .then(res=> {
//       this.setState({
//         title: this.props.state.title,
//         time: this.props.state.time,
//         meetingPlace: this.props.state.meetingPlace
//         numOfKids: this.props.state.numOfKids
//       })
//     })
// }

changeHandler = e => {
  this.setState({
      [e.target.name]: e.target.value
  })
}


submitHandler = e =>{
  e.preventDefault()
  this.addPost(this.state);
}

  render() {
    return (
        <Container>
      <Form className="spaced" onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="postRequest">Request</Label>
          <Input type="text" name="title" id="post" placeholder="Post Request" onChange={this.changeHandler} value={this.state.title}/>
        </FormGroup>
        <FormGroup>
          <Label for="numberOfKids">numberOfKids</Label>
          <Input type="select" name="numOfKids" id="numberOfKids" onChange={this.changeHandler} value={this.state.numOfKids}>
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
          <Input type="textarea" name="meetingPlace" id="exampleText" placeholder="Where are you?" onChange={this.changeHandler} value={this.state.meetingPlace}/>
        </FormGroup>
        <div className="center">
        <Button className="center">Submit</Button>
        </div>
      </Form>
      </Container>
    );
  }
}

export default PostComponent