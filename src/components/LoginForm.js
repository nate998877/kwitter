import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Button, Form, Grid, Modal, Header } from "semantic-ui-react";
import NewUserForm from "./NewUserForm"
import "semantic-ui-css/semantic.min.css";
import squirrel from "./Squirrel.png";


class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login({username:this.state.username, password:this.state.password});
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleModal = e =>{
    if(this.state.displayModal){
      this.setState({displayModal:false})
    }else{
      this.setState({displayModal:true})
    }
  }

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <br/>
        <div id="loginBackground">
        <Grid columns={2} relaxed='very' doubling padded>
        <Grid.Column>
        <h1>Login</h1>
        <Form onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
            />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
            />
        <Button type="submit" disabled={isLoading}>
            Login
          </Button>
        </Form>
          <h2>Take part in the Chittering</h2>
          <div id='buttonRow'>
          <Button type="submit" disabled={isLoading}>
            Forgotten Password
          </Button>
          <Modal
          trigger={<Button type="submit" disabled={isLoading} id="createUser">Create Account</Button>}
          size='small'
          >
            <Header content="New User Form"/>
            <Modal.Content onClick={(e)=>{e.stopPropagation()}}>
              <NewUserForm />
            </Modal.Content>
          </Modal>

          </div>
        </Grid.Column>
        <Grid.Column>
          <h1>Secret Squirrel, Inc.</h1>
        <img src={squirrel} alt="new" />
        </Grid.Column>
        </Grid>
            </div>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);