import React, { Component } from "react";
import { connect } from "react-redux";
import Chit from "./Chit";
import { getMessagesAction } from "../../../actions/messages";

//good luck implementing this
class ChitGroupsUserProfile extends Component {
  componentDidMount() {
    this.props.getMessagesAction({userId: this.props.userid});
  }
  render() {
    return (
      <React.Fragment>
        {this.props.chits
          ? this.props.chits.messages.map(chit => (
              <Chit key={chit.id} text={chit.text} time={chit.createdAt}/>
            ))
          : ""}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ messages, auth }) => {
    return {
      chits: messages.message,
      userid: auth.login.id
    };
  },
  { getMessagesAction }
)(ChitGroupsUserProfile);
