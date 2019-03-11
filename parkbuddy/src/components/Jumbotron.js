import React, {Component} from 'react';
import './jumbotron.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

class Jumbotron extends Component {
    render(){
        return(
            <div class="jumbotron">
                <h1 class="display-4">Theme Park Buddy</h1>
                    <Link to='../pages/Signup/'><Button className="btn btn-primary btn-lg btn-red">Sign Up</Button></Link>
            </div>
        )
    }
}

export default Jumbotron