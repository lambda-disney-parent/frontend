import React, {Component} from 'react';
import image from '../assets/Mickey.jpg'
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
        id:''
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


  
toggle = (id, comment) => event => {
  this.setState({
    isEditing: !this.state.isEditing,
    id,
    comment
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
    console.log({comment:this.state.comment}, {post_id:this.state.post_id}, 55)
    axios 
        .put(`https://disney-parent.herokuapp.com/api/posts/comment/${id}`, {comment: this.state.comment, repliedBy:this.state.repliedBy},  {headers: {Authorization: token}})
        .then(res => {
            this.props.getPosts()
            this.toggle()
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
            this.props.getPosts()        
         })
        .catch(err=> console.log(err));
  }

getPost = (e, id) => {
  const token = localStorage.getItem('token')
  axios
      .get(`https://disney-parent.herokuapp.com/api/posts/${id}`,  {headers: {Authorization: token}})
      .then(res=> {
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
      <div>
        {this.state.isEditing ? this.addComment(this.state) : this.updateComment(this.state.comment, this.state.id)}
        {/* {this.state.isEditing ? this.toggle() : null} */}
        </div>
    )
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
             <CardTitle onClick={(e) => this.getPost(e, this.props.post.id)} className='center large'>{this.props.post.title}</CardTitle>

                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody className='teal'>
                  <CardTitle className="strong">Username:<span>&nbsp;</span> {this.props.post.postedBy} </CardTitle>          
                  <CardSubtitle className='pad'><strong>Date: <span>&nbsp;</span></strong> {this.props.post.time}</CardSubtitle>
                  <CardSubtitle className='pad'><strong>Location:<span>&nbsp;</span></strong> We are located in {this.props.post.meetingPlace} with      {this.props.post.numOfKids} children
                  </CardSubtitle>
                  
              <Form onSubmit={this.submitHandler}>
                  <CardSubtitle>
                       {this.props.post.comment && this.props.post.comment.map(comment=> {
                         
                          return(
                            <div key={comment.id}>
                            
                                <CardSubtitle className='pad'><strong>Comment: <span>&nbsp;</span></strong>{comment.comment} </CardSubtitle>
                                {this.state.isEditing ?
                                  (<div>
                                <div className='centered'>
                                {comment.repliedBy === username ? <Button className='smaller blue left' onClick={(e) => this.deleteComment(e, comment.id)}>Delete</Button> : null}
                                
                                  {comment.repliedBy === username ? <Button className='smaller red' onClick={this.toggle(comment.id, comment.comment)}>Edit </Button> : null}
                                    </div>
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
                      <div className='centered'>
                      <Button className='blue smaller centered' onClick={this.toggle(this.state.comment.id)}>Cancel</Button>
                      <Input name='comment' value={this.state.comment} onChange={this.handleChange} placeholder= 'Edit your comment...'></Input>
                      </div>
                  }   
            </Form>
                 
                </CardBody>
                <div className='displayFlex'>
                   {this.props.post.user_id === thisId ? <Button className='leftButton red' onClick={(e) => this.deletePost(e, this.props.post.id)}>Delete Post</Button> : null}
                   {this.props.post.user_id === thisId ? <Button className='rightButton light-blue' onClick={(e) => this.updatePost(e, this.props.post.id)}>Update Post</Button> : null}
                  </div>
                </Card>
              </div>
            </Container>
        )
      }
}
