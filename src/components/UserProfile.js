import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserAction as getUser,
  getMessagesAction as getMessages,
  updateUserPhotoAction as updateUserPhoto
} from "../actions";
import Spinner from "react-spinkit";
// import settings from "..actions/settingsAcorn.png";
import { Button, Grid, Modal, Form, Header, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import GenericScroll from "./GenericScroll";
import pile from "./acorns.jpg";
import defaultSquirrel from "./profileSquirrel.jpeg";

class UserProfile extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = () =>{
    console.log("formfoo")
    this.props.updateUserPhoto({userId: this.props.id,token: this.props.token, picture:this.state.userPhoto})
  }

  componentDidMount() {
    if (!this.state.user) {
      this.setState({
        user: this.props.getUser({ userId: this.props.id }).users
      });
    }
    this.messageObjToArr();
  }

  uploadPhoto() {
    this.setState({ displayForm: true })
  }

  async messageObjToArr() {
    let messages = await this.props.getMessages({ userId: this.props.id });
    messages = messages.payload.messages;
    let temparr = [];
    for (let obj of messages) {
      console.log(obj.id);
      const value = (
        <React.Fragment>
          <li>
            <p>{obj.id}</p>
            <p>{obj.text}</p>
            <p>{obj.likes.length}</p>
          </li>
        </React.Fragment>
      );

      temparr.push(value);
    }
    console.log(temparr);
    this.setState({ messages: temparr });
  }

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <br />
        <div id="background">
          {/*NavBar will go here */}
          <div id="profileHead">
            <div id="profilePic" alt="new" />
            {/*This is where the picture will go */}
            <img src={defaultSquirrel} id="defaultProf" alt="new" />


            <Modal
              trigger={<div id="settings">
                <Button type="submit" disabled={isLoading}>
                  <img src="src/settingsAcorn.png" alt="new" />
                </Button>
              </div>}
              size='small'
            >
              <Header content="New User Form" />
              <Modal.Content>
                <Form onSubmit={this.formSubmit}>
                    <label></label>
                    <Input type="file" onChange={this.handleChange} name="userPhoto"></Input>
                    <label></label>
                    <Button type="submit"></Button>
                </Form>
              </Modal.Content>
            </Modal>



          </div>
          <Grid columns={3} relaxed="very" padded id="infoColumns">
            <Grid.Column id="left">
              <div id="profileInfo">
                {/* This is where the Account information */}
                <h2>{this.props.user.displayname}</h2>
                <p>{this.props.user.username}</p>
                <p>{this.props.user.about}</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              {console.log(this.state.messages)}
              <GenericScroll
                key={this.state.messages}
                payload={this.state.messages || ""}
              />
            </Grid.Column>
            <Grid.Column id="right">
              {/* Post information */}
              Number of Acorns: Change ME To # of messages
              <div id="piles">
                <img src={pile} alt="new" />
              </div>
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
    token: auth.login,
    user: (users.users && users.users.user) || {
      displayname: "",
      username: "",
      about: ""
    },
    id: (auth.login && auth.login.id) || 5,
    messages: (messages.message && messages.message.messages) || []
  }),
  { getUser, getMessages, updateUserPhoto }
)(UserProfile);
