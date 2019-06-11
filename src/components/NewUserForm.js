import React, { Component } from "react";
import { Form } from "semantic-ui-react";
// import { FORMERR } from "dns";
// import { join } from "path";

class NewUserForm extends Component {
    // state=array of objects
    state = {
        firstname: "", 
        lastname: "",
        email: "",
        password: "", 
        About: "", 
    }
    // to update handleChange and handleSubmit functions
    handleChange = e => {if (e.key='Tab') this.setState({[e.target.name]: e.target.value });}
    handleSubmit = e => {this.setState({[e.target.name]: e.target.value });console.log(this.state)};

    termsLink = (
        <p>I agree with the <a href="http://generator.lorem-ipsum.info/terms-and-conditions" alt="link to terms and conditions page">Terms and Conditions</a> </p>
    )
    render() {
        return (
        <div class="newUserForm-Container">
          <Form onSubmit={this.handleSubmit}>
              <h1>We are happy to add you as a secret squirrel!</h1>
            <Form.Group>
              <Form.Input placeholder='First Name' name='firstname' type="text" onChange={this.handleChange} />
              <Form.Input placeholder='Last Name' name='lastname'  type="text" onChange={this.handleChange} />
            </Form.Group>
            <Form.Input placeholder='Email' name='email'  type="email" onChange={this.handleChange} />
            <Form.Input placeholder='Enter new password' name='password' type="password" onChange={this.handleChange} />              
            <Form.TextArea label='About' type="text" placeholder='Tell us more about you...' />
            <Form.Group>
                <Form.Checkbox/>
                <Form.Field label={this.termsLink}/>
            </Form.Group>
            <hr/>
            <Form.Button content='Submit' />
          </Form>
        </div>
        )
      }

}

export default NewUserForm; 