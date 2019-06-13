import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserAction as getUser, getMessagesAction as getMessages } from "../actions";
import Spinner from "react-spinkit";
import settings from "./settingsAcorn.png";
import { Button, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import GenericScroll from "./GenericScroll"


class UserProfile extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  componentDidMount() {
    this.setState({ users: this.props.getUser({ userId: this.props.id }).users });
  }

  sortMessages(){
    this.props.getMessages({:this.props.id})

  }

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <div id="background">
          {/*NavBar will go here */}
          <Grid columns={1} relaxed="very" doubling padded>
            <Grid.Column>
              <div id="profilePic" />
              {/*This is where the picture will go */}
            </Grid.Column>
            <div id="settings">
              <Button type="submit" disabled={isLoading}>
                <img src={settings} alt="new" />
              </Button>
            </div>
          </Grid>
          <Grid columns={3} relaxed="very" doubling padded>
            <Grid.Column>
              {/* This is where the Account information */}
              <h2>{this.props.user.displayname}</h2>
              <p>{this.props.user.username}</p>
              <p>{this.props.user.about}</p>
            </Grid.Column>
            <Grid.Column>
              <GenericScroll payload="">

              </GenericScroll>
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
export default connect(
  ({ auth, users, messages }) => ({
    isLoading: users.usersLoading,
    err: users.usersError,
    user: users.users && users.users.user || {displayname:"",username:"",about:""},
    id: auth.login && auth.login.id || 5,
    messages: messages.message && messages.message.messages || [],
  }),
  { getUser, getMessages }
)(UserProfile);
