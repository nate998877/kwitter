import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Button, Form, Grid } from "semantic-ui-react";
import Modus from "./Modus"
import NewUserForm from "./NewUserForm"
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

  toggleModus = (e) =>{
    if(this.state.displayModus){
      this.setState({displayModus:false})
    }else{
      this.setState({displayModus:true})
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
          <Button type="submit" disabled={isLoading} onClick={this.toggleModus} id="createUser">
            Create Account
          </Button>
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
        {this.state.displayModus ? <Modus payload={<NewUserForm />} removeModus={this.toggleModus} /> : ""}
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
