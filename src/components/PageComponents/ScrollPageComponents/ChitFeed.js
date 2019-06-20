import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessagesAction as getMessages, getUserAction as getUser} from "../../../actions";
import Chit from "../ScrollPageComponents/Chit"


class ChitFeed extends Component {
    state = {}
    loadChits(){
        const messages = this.props.getMessages()
        console.log(messages)
        for(let message of messages){
            console.log(message)
            this.props.getuser({userId:message.userId})
        }


        this.props.messages.map(message => {
            fetch(`https://kwitter-api.herokuapp.com/users/${message.userId}`, {
                method: "GET", 
                "content-type": "application/json"
            })
            .then(res => res.json())
            .then(async function chitCall (data) {
                await data
                console.log(data)
                let newChitInstance = (<Chit postContent={message.text} profileImage={data.user.pictureLocation} userName={data.user.username}/>)
                return newChitInstance 
        })
    })
    }   
    
    render() {
        console.log("running")
        console.log(this.loadChits())
        return (
            <React.Fragment>
                {this.loadChits()}
            </React.Fragment>
        )
    }
    
}


export default connect(({messages, users})=>({
    messages: messages.message,
    users: users.users
}), {getMessages, getUser})(ChitFeed);