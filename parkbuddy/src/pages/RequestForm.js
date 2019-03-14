import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'
import PostComponent from '../components/PostComponent';
import {Jumbotron, Container} from 'reactstrap'


export default class Profile extends Component {
    constructor(props){
        super(props)
    this.state= {
        users: [],
        posts: []
    }
    }

    // componentDidMount() {
    // }
    

    // addPost = (e, post) => {
    //     e.preventDefault();
    //     axios
    //         .post('https://disney-parent.herokuapp.com/api/posts', post)
    //         .then(res=> {
    //             this.setState({
    //                 posts: res.data
    //             })
    //             this.props.history.push('./posts')
    //         })
    //         .catch(err=> console.log(err))
    // }

 
    
  render(){
      const hello= localStorage.getItem('username')
      return(
          <div>
                <NavBar />
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">Hello, {hello}!</h1>
                    <p className="lead">Please post a request below.</p>
                    </Container>
                </Jumbotron>
                <div>
                    <PostComponent/>
                </div>

          </div>
      )
  }

}