import React, {Component} from 'react';
import axios from 'axios'


export default class Users extends Component {

    state= {
        user: []
    }

componentDidMount() {
    this.getUsers(`https://disney-parent.herokuapp.com/api/users`)
  }

  getUsers = URL => {
    axios
      .get(URL)
      .then(res=> 
        this.setState({
            user: res.data
        }))
        .catch(err=> console.log(err))
  }

  render(){
      return(
          <div>
              {this.state.user.map(user=> {
                <Profile user={user}/>
              })}
          </div>
      )
  }

}