import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login, createUserAction as createUser } from "../actions";
import Spinner from "react-spinkit";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    let stateWithoutDisplayName = this.state
    delete stateWithoutDisplayName.displayName
    this.props.login(stateWithoutDisplayName);
  };

  handleCreateUser = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
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
            type="current-password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </form>


        <h1>Create User</h1>
        <form onSubmit={this.handleCreateUser}>
        <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">DisplayName</label>
          <input
            type="text"
            name="displayName"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="new-password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </form>
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
  { login, createUser }
)(LoginForm);
