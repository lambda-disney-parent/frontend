import React, {Component} from 'react';
import PostComponent from '../components/PostComponent';
import NavBar from '../components/NavBar'


export default class Profile extends Component {

  render(){
      return(
          <div>
                <NavBar />
              <PostComponent />
          </div>
      )
  }

}