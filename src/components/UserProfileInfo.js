import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessagesAction as getMessages} from "../actions";
import "semantic-ui-css/semantic.min.css";

class UserProfileInfo extends Component {
    componentDidMount(){
        this.setState({messages: this.props.getMessages({ limit: this.props.limit || null, userId: this.props.userId || 5 }).messages.messages
        });
    }
    render(){
        return(
            <React.Fragment>
            <b>Number of Acorns:{this.userMessagesInfo? this.userMessagesInfo.length : ""}</b>
            </React.Fragment>
        )
    }
}

export default connect(
    ({messages}) => ({
        userMessagesInfo: messages.message &&messages.message.messages || [],
    }),
    {getMessages}
)(UserProfileInfo)