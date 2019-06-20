import React, { Component } from "react";
import { domain } from "../../../actions/constants"
import { connect } from "react-redux";
import { getMessagesAction as getMessages, getUsers } from "../../../actions";
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
    // state = {}
    // currentMessages() {
    //     fetch(fetchMessagesURL)
    //     .then(res => res.json())
    //     .then(data => {console.log(data)})
    // }
    componentDidMount() {
        this.props.getMessages({});
        // this.props.getUsers({});
        // this.loadChits()
        
    }
    loadChits(){
        let dataArr = []
        let chits = []
        this.props.messages.map(message => {
            fetch(`https://kwitter-api.herokuapp.com/users/${message.userId}`, {
                method: "GET", 
                "content-type": "application/json"
            })
            .then(res => res.json())
            .then(data => {
                dataArr.push(data)
                console.log(dataArr)
                let newChitInstance = (
                <Chit postContent={message.text} pictureLocation={data.user.pictureLocation} userName={data.user.username}/>)
                chits = [...chits, newChitInstance]
                return newChitInstance 

            })
        
        // this.setState({
        //     userID: dataArr, 
        //     messages: this.props.messages, 
        //     users: this.props.users
        // })
        // console.log(dataArr)
        // return (
        //     <React.Fragment>
        //         {dataArr}
        //     </React.Fragment>
        // )
        // console.log("local state:",this.state)
    })
    }   
    
    render() {
        return (
            // <React.Fragment>
            //     {this.loadChits()}
            // </React.Fragment>
            <React.Fragment>
            {this.props.messages.length === 0 ? (<p>Messages Loading....</p>) : 
                this.props.messages.map(message => {
                return (<Chit postContent={message.text} profileImage={message.pictureLocation !== null ? domain + message.pictureLocation : acorn} userName={message.username}/>)
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