import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import './post.css'

export default function Post(props) {
  return (
      <Container className="wrap">
    <div>
      <Card className="shadow border">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className="strong">Username</CardTitle>          
          <CardSubtitle className='bold'>{props.post.time}</CardSubtitle>
          <CardSubtitle className='bold'>{props.post.title}</CardSubtitle>
          <CardSubtitle className='bold'>We are located at {props.post.meetingPlace} with {props.post.numOfKids} children</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    </Container>
  )
}
