import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserAction as getUser,
  getMessagesAction as getMessages,
  updateUserPhotoAction as updateUserPhoto
} from "../actions";
import Spinner from "react-spinkit";
import { Button, Grid, Modal, Form, Header, Input, Image } from "semantic-ui-react";
import settings from "./settingsAcorn.png";
import "semantic-ui-css/semantic.min.css";
import GenericScroll from "./GenericScroll";
import defaultSquirrel from "./profileSquirrel.jpeg";
import Nav from "./NavBar"
import NewChit from "./NewChit";
import NavBar from "./NavBar";

class UserProfile extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = event =>{
    event.preventDefault()
    console.log(event.target)
    const form = new FormData(event.target)
    for(let each of form.entries()){
      console.log(each)
    }
    this.props.updateUserPhoto({form:form, userId: this.props.id, token: this.props.token})
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
    this.setState({ messages: temparr });
  }

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        {/* 1: navbar */}
        <Grid.Row>
          <NavBar/>
        </Grid.Row>

        {/* 2. profile pic and cover pic area */}
      <Grid columns={2} id="profilePic" >
          <Grid.Column> 
            <Grid.Row>
              <Image src={defaultSquirrel} alt="Profile Picture"></Image>
            </Grid.Row>
            <Grid.Row>

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
                    <Input type="file" name="picture"></Input>
                    <br />
                    <Button type="submit">uploadPhoto</Button>
                </Form>
              </Modal.Content>
            </Modal>

            </Grid.Row>
          </Grid.Column>
          <Grid.Column  id="coverPic"></Grid.Column>
      </Grid>
        <div id="deepBackground">

{/* 3. Left & Right panel: Profile stats and latest posts*/}
      <Grid columns={2} id="profileinfo2" divided>
           {/* 3a. Top panel: user profile stats / dashboard */}
          <Grid.Column width={4}> 
            <Grid.Row><h2>{this.props.user.displayname}</h2></Grid.Row>
            <Grid.Row><p>{this.props.user.username}</p></Grid.Row>
            <Grid.Row><p>{this.props.user.about}</p></Grid.Row>
            <Grid.Row><p>Chit digs: {this.props.message}</p></Grid.Row>
            {/* <Grid.Row><p>Chit destroys: </p></Grid.Row> */}
          </Grid.Column>

            {/* 3b. user's post stats: latest posts and users' friends latest posts  */}
          <Grid.Column width={6}>
            <Grid.Row className="test-Col" column={2} divided="vertically">
            <Grid.Column>
            <GenericScroll  key={this.state.messages} payload={this.state.messages || ""}/>
            </Grid.Column>
              {/* <Grid.Row><h1>Most "Digged" Chit...</h1></Grid.Row>
              <Grid.Column>
                <NewChit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" userName="tamoya" postContent="Tamoya's post"></NewChit>
                <NewChit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" userName="tamoya" postContent="Tamoya's post"></NewChit>
                
              </Grid.Column>
              <Grid.Row id="break"></Grid.Row>
              <Grid.Row><h1>Friends List Most "Digged" Chit...</h1></Grid.Row>              
              <Grid.Column>
                <NewChit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" userName="tamoya" postContent="Tamoya's post"></NewChit>
                <NewChit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" userName="tamoya" postContent="Tamoya's post"></NewChit>
              </Grid.Column>                   */}
            </Grid.Row>
          </Grid.Column>
      </Grid>
    
        {/* {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>} */}
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
