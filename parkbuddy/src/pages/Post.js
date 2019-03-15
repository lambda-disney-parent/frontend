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
        comment: '',
        repliedBy: '',
        post_id:'',
        isEditing: true,
        commentUpdate: ''
      }
    }

    componentDidMount(){
      this.props.getPosts()
      this.setState({
        repliedBy: localStorage.getItem('username'),
        post_id: this.props.post.id
      })
      console.log(this.props, 10)
    }
  
toggle(){
  this.setState({
    isEditing: !this.state.isEditing
  })
}

  handleChange = e => {
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  addComment = (comment, id, username) => {
    const token = localStorage.getItem('token')
    axios 
        .post('https://disney-parent.herokuapp.com/api/posts/comment', {comment:this.state.comment, repliedBy:this.state.repliedBy, post_id:this.state.post_id},  {headers: {Authorization: token}})
        .then(res => {
            this.props.getPosts()
            this.setState({
              comment: ''
            })
        })
        .catch(err=> console.log(err))
  }

  updateComment = (comment, id) => {
    const token = localStorage.getItem('token')
    console.log(id, 55)
    axios 
        .put(`https://disney-parent.herokuapp.com/api/posts/comment/${id}`, {comment: this.state.comment, post_id:this.state.post_id},  {headers: {Authorization: token}})
        .then(res => {
            this.props.getPosts()
            this.setState({
              comment:''
            })
        })
        .catch(err=> console.log(err))
  }

  deleteComment = (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    axios
        .delete(`https://disney-parent.herokuapp.com/api/posts/comment/${id}`,  {headers: {Authorization: token}})
        .then(res=> {
          window.location.reload();
            console.log(res)
        })
        .catch(err=> console.log(err));
  }


deletePost = (e, id) => {
  e.preventDefault();
  const token = localStorage.getItem('token')
  axios
      .delete(`https://disney-parent.herokuapp.com/api/posts/${id}`,  {headers: {Authorization: token}})
      .then(res=> {
        window.location.reload();
          console.log(res)
      })
      .catch(err=> console.log(err));
}
  
  submitHandler = (e) => {
    e.preventDefault()
    return(
      <>
    {this.state.isEditing ? this.addComment(this.state) : this.updateComment(this.state.comment, this.state.post_id)
    }
    {!this.state.isEditing ? this.toggle() : null}
      </>
    )
    this.setState({
      comment: ''
    })   
    
    
}
render(){
  
  const thisId = +localStorage.getItem('userId')
  const username = localStorage.getItem('username')
  console.log(this.props.post.comment, 10)
//   console.log(this.props.post.user_id)
//   console.log(typeof this.props.user_id) 
// console.log(typeof thisId) 
      return (
          <Container className="wrap">
            <div>
              <Card className="shadow border">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle className="strong">Username: {this.props.post.postedBy} </CardTitle>          
                  <CardSubtitle className='pad'><strong>Date:</strong> {this.props.post.time}</CardSubtitle>
                  <CardSubtitle className='pad'><strong>Title:</strong> {this.props.post.title}</CardSubtitle>
                  <CardSubtitle className='pad'><strong>Meeting Place:</strong> We are located at {this.props.post.meetingPlace} with      {this.props.post.numOfKids} children
                  </CardSubtitle>
                  <Form onSubmit={this.submitHandler}>
                  <CardSubtitle>
                       {this.props.post.comment && this.props.post.comment.map(comment=> {
                         
                          return(
                            <div key={comment.id}>
                            {this.state.isEditing ?
                                  (<div>
                                <CardSubtitle className='pad'><strong>Comment:</strong>{comment.comment} </CardSubtitle>
                                {comment.repliedBy === username ? <Button className='smaller' onClick={(e) => this.deleteComment(e, comment.id)}>Delete</Button> : null}
                                
                                  {comment.repliedBy === username ? <Button className='smaller' onClick={() => this.toggle()}>Edit </Button> : null}
                            
                                  
                                 
                                
                                  </div>)
                                  :
                                  null
                        }
                            </div>
                            
                          )
                          
                      }
                       )}
    
                  </CardSubtitle> 
                  {this.state.isEditing ? 
                      <Input name='comment' value={this.state.comment} onChange={this.handleChange} placeholder= 'Add a comment...'></Input>
                      :
                      <>
                      <Button onClick={() => this.toggle()}>Undo Edit </Button>
                      <Input name='comment' value={this.state.comment} onChange={this.handleChange} placeholder= 'Edit your comment...'></Input>
                      </>
                  }

                    
                  </Form>
                 
                </CardBody>
                   {this.props.post.user_id === thisId ? <Button onClick={(e) => this.deletePost(e, this.props.post.id)}>Delete Post</Button> : null}
                </Card>
              </div>
            </Container>
        )
      }
}
