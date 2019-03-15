import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import "./postcomponent.css";
import axios from "axios";
import {withRouter} from 'react-router-dom'
import Post from "../pages/Post";

class PostComponent extends React.Component {
  state = {
    user_id: +localStorage.getItem("userId"),
    title: "",
    time: "",
    meetingPlace: "",
    numOfKids: 1
  };
//

  addPost = post => {
    const token = localStorage.getItem("token");
    console.log(post);
    axios
      .post("https://disney-parent.herokuapp.com/api/posts", post, {
        headers: { Authorization: token }
      })
      .then(res => { console.log(res);
        this.props.history.push('./posts')
      }
     
      )
      .catch(err => console.log(err));
  };

  // updatePost = (e, id) => {
  //   e.preventDefault();
  // const token = localStorage.getItem('token')
  //   axios
  //     .put(`https://disney-parent.herokuapp.com/api/posts/${id}` , {headers: {Authorization: token}})
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
    console.log(this.state);
    this.setState({
      [e.target.name]:
        e.target.name === "numOfKids"
          ? parseFloat(e.target.value)
          : e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.addPost(this.state);
    this.props.history.push('./posts')
  };

  render() {
    return (
      <Container>
        <Form className='spaced' onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for='postRequest'>Request</Label>
            <Input
              type='text'
              name='title'
              id='post'
              placeholder='Post Request'
              onChange={this.changeHandler}
              value={this.state.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for='numberOfKids'>numberOfKids</Label>
            <Input
              type='select'
              name='numOfKids'
              id='numberOfKids'
              onChange={this.changeHandler}
              value={this.state.numOfKids}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='location'>Location</Label>
            <Input
              type='textarea'
              name='meetingPlace'
              id='exampleText'
              placeholder='Where are you?'
              onChange={this.changeHandler}
              value={this.state.meetingPlace}
            />
            <Label for='time'>Meeting Time</Label>
            <Input
              type='textarea'
              name='time'
              id='exampleText'
              placeholder='What time should we meet?'
              onChange={this.changeHandler}
              value={this.state.time}
            />
          </FormGroup>
          <div className='center'>
            <Button className='centered blue'>Submit</Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default withRouter(PostComponent);