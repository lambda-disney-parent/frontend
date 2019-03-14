import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Input,
  Form
} from "reactstrap";
import "./post.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      repliedBy: "",
      post_id: "",
      //added these variables
      isOpen: false,
      editComment: ""
    };
    this.POST_URL = 'https://disney-parent.herokuapp.com/api/posts';
  }

  componentDidMount() {
    this.props.getPosts();
    this.setState({
      repliedBy: localStorage.getItem("username"),
      post_id: this.props.post.id
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // changed function to reflect state changes
  addComment = (state) => {
    const token = localStorage.getItem("token");
    const {comment, repliedBy, post_id} = state;
    axios
      .post(
        "https://disney-parent.herokuapp.com/api/posts/comment",
        {comment: comment, repliedBy: repliedBy, post_id: post_id},
        { headers: { Authorization: token } }
      )
      .then(res => {
        this.props.getPosts();
        this.setState({
          comment: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleUpdate = (comment_id) => {
    this.setState({isOpen: comment_id})
    console.log(this.state);
  }

  updateComment = (comment, id) => {
    const token = localStorage.getItem("token");
    console.log(comment, id);
    axios
      .put(
        `https://disney-parent.herokuapp.com/api/posts/comment/${id}`,
        { comment: comment },

      )
      .then(res => {
        this.props.getPosts();
        { headers: { Authorization: token } }
        this.setState({
          editComment: ""
        });
      })
      .catch(err => console.log(err));
  };
  
  // refactored function as example
  deleteComment = e => {
    const token = localStorage.getItem("token");
    const id = e.target.name;
    axios
      .delete(`${this.POST_URL}/comment/${id}`, {
        headers: { Authorization: token }
      })
      .then(res => this.props.getPosts())
      .catch(err => console.log(err));
  };

  deletePost = (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .delete(`https://disney-parent.herokuapp.com/api/posts/${id}`, {
        headers: { Authorization: token }
      })
      .then(res => {
        // window.location.reload();
      })
      .catch(err => console.log(err));
  };

  submitHandler = e => {
    e.preventDefault();
    this.addComment(this.state);
  };

  render() {
    const thisId = +localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    return (
      <Container className="wrap">
        <div>
          <Card className="shadow border">
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="strong">
                Username: {this.props.post.postedBy}
              </CardTitle>
              <CardSubtitle className="bold">
                <strong>Date:</strong> {this.props.post.time}
              </CardSubtitle>
              <CardSubtitle className="bold">
                <strong>Title:</strong> {this.props.post.title}
              </CardSubtitle>
              <CardSubtitle className="bold">
                <strong>Meeting Place:</strong> We are located at {this.props.post.meetingPlace} with {this.props.post.numOfKids} children
              </CardSubtitle>
              <Form onSubmit={this.submitHandler}>
                <CardSubtitle>
                  {this.props.post.comment &&
                    this.props.post.comment.map(comment => {
                      return (
                        <div key={comment.id}>
                          <CardSubtitle>
                            <strong>Comment:</strong>
                            {comment.comment}
                          </CardSubtitle>
                          {/* check to see if the value on the state is equal to the current comment in the map method */}
                          {this.state.isOpen === comment.id ?
                            // if so, render this input form that submits text input to the updateComment function
                            <div><Input
                              name="editComment"
                              value={this.state.editComment}
                              onChange={this.handleChange}
                            >Testing</Input><Button onClick={() => this.updateComment(this.state.editComment, comment.id)}>Submit</Button></div> :
                            // else display the Delete and Edit buttons
                            <>
                              {comment.repliedBy === username ? (
                                <Button
                                  name={comment.id}
                                  onClick={this.deleteComment}
                                >
                                  Delete
                              </Button>
                              ) : null}
                              {comment.repliedBy === username ? (
                                <Button
                                  onClick={() =>
                                    // this button gives the current comment's id to this.state.isOpen
                                    this.handleUpdate(comment.id)
                                  }
                                >
                                  Edit
                              </Button>
                              ) : null}
                            </>
                          }


                        </div>
                      );
                    })}
                </CardSubtitle>
                <Input
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                  placeholder="Add a comment..."
                />
              </Form>
            </CardBody>
            {this.props.post.user_id === thisId ? (
              <Button onClick={e => this.deletePost(e, this.props.post.id)}>
                Delete Post
              </Button>
            ) : null}
          </Card>
        </div>
      </Container>
    );
  }
}
