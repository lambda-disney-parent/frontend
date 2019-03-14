import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader'


export default class Posts extends Component {
    constructor(props){
        super(props)
    this.state= {
        posts: [],
        users: []
        }
    }

    componentDidMount(){
        this.getPosts();
        this.getUsers();
    }
    
  getPosts = () => {
      const token = localStorage.getItem('token')
    axios
      .get('https://disney-parent.herokuapp.com/api/posts', {headers: {Authorization: token}})
      .then(res=> 
        {console.log(res.data)
        this.setState({      
            posts: res.data
        })
        console.log(this.state.posts)
    })
        .catch(err=> console.log(err))
  }

  getUsers = () => {
    const token = localStorage.getItem('token')
  axios
    .get('https://disney-parent.herokuapp.com/api/users', {headers: {Authorization: token}})
    .then(res=> 
      {console.log(res.data)
      this.setState({      
          users: res.data
      })
      console.log(this.state.users)
  })
      .catch(err=> console.log(err))
    }

    updatePost = (post) => {
        axios
        .put('https://disney-parent.herokuapp.com/api/posts', post)
        .then(res=> {
            this.setState({
                posts: res.data
            })
            this.props.history.push('./posts')
        })
        .catch(err=> console.log(err))
    }

  logout = () => {
      localStorage.clear();
      window.location.reload()
  }

  render(){
      return(
          <div>
              <NavBar />
              <PageHeader />
              {this.state.posts.map((post)=>
                <Post post={post} key={post.id} getPosts={this.getPosts}/>
              )}
          </div>
      )
  }
}