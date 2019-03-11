import React, {Component} from 'react';
import './jumbotron.css';
import {Button} from 'reactstrap';

class Jumbotron extends Component {
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-4">Theme Park Buddy</h1>
                {this.props.login === true ? 
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign Up</Button>
                        :
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign In</Button>}
            </ div>
        
            
        )
    }
}

export default Jumbotron