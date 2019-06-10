import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import squirrel from "./Squirrel.png";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <Segment placeholder>
        <Grid columns={2} relaxed='very' doubling centered >
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
          <Button type="submit" disabled={isLoading}>
            Create Account
          </Button>
          </div>
        </Grid.Column>
        <Grid.Column>
          <h1>Secret Squirrel, Inc.</h1>
        <img src={squirrel} alt="new" />
        </Grid.Column>
        </Grid>
        <Divider vertical/>
            </Segment>
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
