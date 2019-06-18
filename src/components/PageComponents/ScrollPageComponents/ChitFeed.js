import React, { Component } from "react";
// import { domain } from "../../../actions/constants"
import { connect } from "react-redux";
import { getMessages } from "../../../actions";
import Chit from "../ScrollPageComponents/Chit"
import acorn from "../../../pictures/acorn.png"

// 1) fetch messages from API 
// 2) filter messages and append new chit post for every message
// 3) render on userfeed page
// 4) render on profile page 

// const fetchMessagesURL = domain + "/messages?limit=50&offset=0"

// export const fetchCurrentMessages = () => {
//     this.props.getMessagesAction();
//     // return fetch("https://kwitter-api.herokuapp.com/messages?limit=50&offset=0", {
//     //     method: "GET", 
//     //     headers: {"Content-Type": "application/json"}, 
//     //     // body: JSON.stringify(Object)
//     // })
//     // .then(res => res.json())
//     // .then(data => {
//     //     console.log("Messages from Kwitter API:", data)
//     // });
    
// }

// fetchCurrentMessages(); 

class ChitFeed extends Component {
    // currentMessages() {
    //     fetch(fetchMessagesURL)
    //     .then(res => res.json())
    //     .then(data => {console.log(data)})
    // }

    componentDidMount() {
        this.props.getMessages({});
    }

    render() {
        return (
            <React.Fragment>
            {this.props.messages.map(message => {
                return (<Chit postContent={message.text} profileImage={acorn} userName={message.userId}/>)
            })}
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    getMessages
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChitFeed);
// export default ChitFeed;