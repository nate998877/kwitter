import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessagesAction as getMessages, getUserAction as getUser} from "../../../actions";
import Chit from "../ScrollPageComponents/Chit"


class ChitFeed extends Component {
    state = {chits: []}

    componentDidMount(){
        this.loadChits().then(arr=>{
            this.setState({chits:arr})
        })
    }

    async loadChits(){
        const promise = await this.props.getMessages()
        const messages = promise.payload.messages
        let arr = []
        for(let message of messages){
            const user = await this.props.getUser({ userId:message.userId })
            const trueUser = user.payload.user
            arr.push(<Chit postContent={message.text} profileImage={trueUser.pictureLocation} userName={trueUser.username}/>)
        }
        return arr
    }
    
    render() {
        console.log(this.state.chits)
        return (
            <React.Fragment>
                {this.state.chits}
            </React.Fragment>
        )
    }
    
}


export default connect(({messages, users})=>({
    messages: messages.message,
    users: users.users
}), {getMessages, getUser})(ChitFeed);