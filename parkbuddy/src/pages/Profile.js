import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'


export default class Users extends Component {
    constructor(props){
        super(props)
    this.state= {
        users: []
    }
    }

    componentDidMount() {
        this.getUsers()
    }
    
  getUsers = () => {
      const token = localStorage.getItem('token')
    axios
      .get('https://disney-parent.herokuapp.com/api/users', {headers: {Authorization: token}})
      .then(res=> 
        this.setState({      
            users: res.data.users
        }))
      
        .catch(err=> console.log(err))
  }

  render(){
      return(
          <div>
                <NavBar />
                <div>
                    {/* {this.state.users.filter(user=> 
                    user.id===this.state.users.currentUser ? <User user={user} /> : null )} */}
                     
                </div>

          </div>
      )
  }

}