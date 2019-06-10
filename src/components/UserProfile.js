import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import settings from "./settingsAcorn.png"
import { Divider, Button, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


class UserProfile extends Component {

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <div id="background">
        {/*NavBar will go here */}
        <Grid columns={1} relaxed='very' doubling centered>
        <Grid.Column>

          {/*This is where the picture will go */}
        </Grid.Column>
        <div id = 'settings'>
        <Button type="submit" disabled={isLoading}>
        <img src={settings} alt="new"/>
        </Button>
        </div>
        </Grid>
        <Grid columns={3} relaxed='very' doubling centered >
        <Grid.Column>
          {/* This is where the Account information */}
          rflrfvewrfsd
        </Grid.Column>
        <Grid.Column>
          {/* Posts */}
          evf efverfdvd
        </Grid.Column>
        <Grid.Column>
          {/* Post information */}
          vfedfv ev
        </Grid.Column>
        </Grid>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;
