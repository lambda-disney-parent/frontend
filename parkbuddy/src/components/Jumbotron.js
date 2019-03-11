import React, {Component} from 'react';
import './jumbotron.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

class Jumbotron extends Component {
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-4">Theme Park Buddy</h1>
                {this.props.login === true ? 
                    (<Link to='/Signup/'><Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign Up</Button></Link>)
                        :
                    (<Link exact to='/'><Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign In</Button></Link>)}
            </ div>
        
            
        )
    }
}

export default Jumbotron