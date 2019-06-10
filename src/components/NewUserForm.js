import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { createUserAction as createUser } from "../actions"
import { connect } from "react-redux";


class NewUserForm extends Component {
    state = {
        name: "",
        username: "",
        password: "", 
    }
    // to update handleChange and handleSubmit functions
    handleChange = e => {if (e.key='Tab') this.setState({[e.target.name]: e.target.value });}
    handleSubmit = e => {
      if(this.verifyPassword())
      this.setState({[e.target.name]: e.target.value })};

    verifyPassword(input){
      return (input.value === document.getElementById("password").value) ?  input.setCustomValidity('Password Must be Matching.') : input.setCustomValidity('');
    }

    termsLink = (
        <p>I agree with the <a href="http://generator.lorem-ipsum.info/terms-and-conditions" alt="link to terms and conditions page">Terms and Conditions</a> </p>
    )
    render() {
        return (
        <div class="newUserForm-Container">
          <Form onSubmit={this.handleSubmit}>
              <h1>We are happy to add you as a secret squirrel!</h1>
            <Form.Group>
              <Form.Input placeholder='Full Name' name='name' type="text" onChange={this.handleChange} required />
            </Form.Group>
            <Form.Input placeholder='Username' name='username'  type="text" onChange={this.handleChange} required />
            <Form.Input placeholder='Enter new password' name='password' type="new password" onChange={this.handleChange} id="password" required />              
            <Form.Input placeholder='Confirm Password' name='passwordCheck' type="new password" id="passwordCheck" required />              
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

export default connect(
  ({ users }) => ({
    isLoading: users.usersLoading,
    err: users.usersError
  }),
  { createUser }
)(NewUserForm);