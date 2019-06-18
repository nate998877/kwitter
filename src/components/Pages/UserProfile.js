import { ProfileInfo, ProfilePic, PostInfo, NavBar, Chit, UpdatePhotoModal } from "../PageComponents/ScrollPageComponents"
import defaultSquirrel from "../../pictures/profileSquirrel.jpeg";
import settings from "../../pictures/settingsAcorn.png";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserAction as getUser,
  getMessagesAction as getMessages
} from "../../actions";
// import Spinner from "react-spinkit";

class UserProfile extends Component {
  state = {};
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if(!this.state.users){this.setState({users:this.props.getUser({ userId: this.props.id }).users})}
  }

  //this is left here for reasons, please don't touch
  async messageObjToArr() {
    let messages = await this.props.getMessages({ userId: this.props.id });
    messages = messages.payload.messages;
  }

  render() {
    const { isLoading } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <ProfilePic isLoading={isLoading} defaultSquirrel={defaultSquirrel} settings={settings} />
        <UpdatePhotoModal isLoading={isLoading}/>
        <Grid columns={2} id="profileinfo2" divided>
          <ProfileInfo user={this.props.user} message={this.props.message} />
          <PostInfo/>
        </Grid>
      </React.Fragment>
    );
  }
}


export default connect(
  ({ auth, users, messages }) => ({
    isLoading: users.usersLoading,
    err: users.usersError,
    user: (users.users && users.users.user) || {
      displayname: "",
      username: "",
      about: ""
    },
    id: (auth.login && auth.login.id) || 5,
    messages: (messages.message && messages.message.messages) || []
  }),
  { getUser, getMessages }
)(UserProfile);
