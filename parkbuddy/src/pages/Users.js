import React, {Component} from 'react';
import axios from 'axios';
import User from './User';
import NavBar from '../components/NavBar'
import PageHeader from '../components/PageHeader'



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
                <PageHeader />
                {this.state.users.map(user=>  
                    <User user={user} key={user.id}/>)
                }
          </div>
      )
  }

}