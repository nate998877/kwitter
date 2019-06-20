import React, { Component } from "react";
import { connect } from "react-redux";
import Chit from "./Chit";
import { getMessagesAction } from "../../../actions/messages";
import { getUsersAction } from "../../../actions/users";


class ChitGroups extends Component {
  componentDidMount() {
    this.props.getUsersAction();
    this.props.getMessagesAction();
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
  ({ messages, users }) => {
    return {
      chits: messages.message,
      users: users.userId,
    };
  },
  { getMessagesAction, getUsersAction }
)(ChitGroups);
