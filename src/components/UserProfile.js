import React, { Component } from "react";
// import { connect } from "react-redux";
// import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Divider, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class UserProfile extends Component {

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <Segment placeholder>
        {/*NavBar will go here */}
        <Grid columns={1} relaxed='very' doubling centered>
        <Grid.Column>
          {/*This is where the picture will go */}
        </Grid.Column>
        </Grid>
        <Grid columns={3} relaxed='very' doubling centered >
        <Grid.Column>
          {/* This is where the Account information */}
        </Grid.Column>
        <Grid.Column>
          {/* Posts */}
        </Grid.Column>
        <Grid.Column>
          {/* Post information */}
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

export default UserProfile;
