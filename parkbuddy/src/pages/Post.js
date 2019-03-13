import React, {Component} from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Container, Input, Form } from 'reactstrap';
import './post.css';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class Post extends Component {
    constructor(props){
      super(props)
      this.state={
        comment: ''
      }
    }
  
  addComment = (comment) => {
    axios 
        .post('https://disney-parent.herokuapp.com/api/posts/comment', comment)
        .then(res => {
            console.log(res)
        })
        .catch(err=> console.log(err))
  }

    handleChange = e => {
      this.setState({
          [e.target.name]:e.target.value
      })
  }


deletePost = (e, id) => {
  e.preventDefault();
  axios
      .delete(`https://disney-parent.herokuapp.com/api/posts/${id}`)
      .then(res=> {
        window.location.reload();
          console.log(res)
      })
      .catch(err=> console.log(err));
}
  
  submitHandler = (e) => {
    e.preventDefault()
   this.addComment(this.state)
}
render(){
  const thisId = localStorage.getItem('userId')
      return (
          <Container className="wrap">
            <div>
              <Card className="shadow border">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle className="strong">Username: {this.props.post.username}</CardTitle>          
                  <CardSubtitle className='bold'><strong>Date:</strong> {this.props.post.time}</CardSubtitle>
                  <CardSubtitle className='bold'><strong>Title:</strong> {this.props.post.title}</CardSubtitle>
                  <CardSubtitle className='bold'><strong>Meeting Place:</strong> We are located at {this.props.post.meetingPlace} with      {this.props.post.numOfKids} children
                  </CardSubtitle>
                  <Form onSubmit={this.submitHandler}>
                    <Input name='comment' value={this.state.comment} onChange={this.handleChange} placeholder= 'Add a comment...'></Input>
                  </Form>
                  <div>
                    {this.props.post.comments.map(comment=>
                    <p>{comment.comment}</p>)}
                  </div>
                </CardBody>
                   {this.props.id === thisId ? <Button onClick={(e) => this.deletePost(e, this.props.post.id)}>Delete Post</Button> : null}
                </Card>
              </div>
            </Container>
        )
      }
}
