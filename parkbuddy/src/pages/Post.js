import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Container, Input } from 'reactstrap';
import './post.css'

export default function Post(props) {
    console.log(props)
  return (
      <Container className="wrap">
    <div>
      <Card className="shadow border">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className="strong">Username:</CardTitle>          
          <CardSubtitle className='bold'><strong>Date:</strong> {props.post.time}</CardSubtitle>
          <CardSubtitle className='bold'><strong>Title:</strong> {props.post.title}</CardSubtitle>
          <CardSubtitle className='bold'><strong>Meeting Place:</strong> We are located at {props.post.meetingPlace} with {props.post.numOfKids} children</CardSubtitle>
          <Input placeholder= 'Add a comment...'></Input>
          {/* <div>
            {props.post.comments.map(comment=>
            <p>{comment.comment}</p>)}
          </div> */}
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    </Container>
  )
}
