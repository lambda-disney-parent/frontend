import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
import './pageheader.css'

export default class PageHeader extends Component {
  render() {
    return (
      <div>
      <Jumbotron className="light-blue">
        <h1 className="display-3 white">Welcome to Disney Parents!</h1>
        <p className="lead white">The app that lets YOU enjoy your vacation TOO</p>
        <p>We watch. While you ride.</p>
        <p className="lead white">
          <Button className="red" color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      </div>
    )
  }
}
