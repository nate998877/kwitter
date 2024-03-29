import React, { Component } from "react";
import { connect } from "react-redux";
import Chit from "./Chit";
import { getMessagesAction } from "../../../actions/messages";

//good luck implementing this
class ChitGroupsUserProfile extends Component {
  componentDidMount() {
    let payload = this.props.getMessagesAction({id: this.props.userid});
  }

  render() {
    console.log(this.props.chits)
    return (
      <React.Fragment>
        {this.props.chits.map(chit => {
          return <Chit key={chit.id} text={chit.text} time={chit.createdAt} self={chit} reRenderMessages={()=>{this.props.getMessagesAction({id: this.props.userid})}} />
        })}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ messages, auth }) => {
    return {
      chits: messages.message && messages.message.messages || [],
      userid: auth.login && auth.login.id || 5
    };
  },
  { getMessagesAction }
)(ChitGroupsUserProfile);