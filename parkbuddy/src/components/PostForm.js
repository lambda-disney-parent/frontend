import React from 'react';
import axios from 'axios';
import {Button, Label, Input, Form} from 'reactstrap'

export class PostForm extends React.Component{
    state={
        post: {
            name: '',
            kids: '',
            location: ''
        }
    }


handleChange = e => {
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault();
    const post= {
        post: this.state.post
    }
    axios
        .post(url, post)
        .then(res => {
            console.log(res);
            console.log(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
};

render(){
    return(
        <div>
            <Form onSubmit={this.handleSubmit}>
                <Label> How many kids do you have?
                    <Input type="text" placeholder='Enter Number' onChange={this.handleChange}>
                    </Input>
                </Label>
                <Label>Where are you located?
                    <Input type="text" placeholder='Enter Location' onChange={this.handleChange}>
                    </Input>
                </Label>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
}