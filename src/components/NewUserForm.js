import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { createUserAction as createUser } from "../actions"
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

class NewUserForm extends Component {
    state = {
        username: "",
        displayName: "",
        password: ""
    };

    // to update handleChange and handleSubmit functions
    handleChange = (e) => { 
      this.setState( {[e.target.name]: e.target.value } ) 
    }

    handleSubmit = e => {
      let promise = this.props.createUser(this.state)
      const target = e.target
      e.preventDefault()
      promise.then(()=>{
        this.setState({ ...this.state, toggle:true})
      }).catch(er=>{
        console.log(er)
        document.getElementById("username").setCustomValidity("Username already Taken")
        target.reportValidity()
        setTimeout(() => {
          document.getElementById("username").setCustomValidity("")
        }, 1000);
      })
    }


    verifyPassword(input){
      console.log(input.target.value)
      console.log(document.getElementById("password").value)
      return (input.target.value !== document.getElementById("password").value) ?  input.target.setCustomValidity('Password Must be Matching.') : input.target.setCustomValidity('');
    }

    termsLink = (
        <p>I agree with the <a href="http://generator.lorem-ipsum.info/terms-and-conditions" alt="link to terms and conditions page">Terms and Conditions</a> </p>
    )
    render() {
        return (
        <div className="newUserForm-Container">
          <Form onSubmit={this.handleSubmit}>
              <h1>We are happy to add you as a secret squirrel!</h1>
            <Form.Group>
              <Form.Input placeholder='username' name='username' type="text" onChange={this.handleChange} id="username" required />
            </Form.Group>
            <Form.Input placeholder='Display Name' name='displayName'  type="text" onChange={this.handleChange} required />
            <Form.Input placeholder='Enter new password' name='password' type="new password" onChange={this.handleChange} id="password" required />              
            <Form.Input placeholder='Confirm Password' name='passwordCheck' type="new password" onInput={this.verifyPassword} id="passwordCheck" required />
            <hr/>
            <Form.Button content='Submit' />
          </Form>
          {this.state.toggle ? <Redirect to='/' /> : ""}
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
