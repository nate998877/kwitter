import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
//pulled this from the feed page and broke it out to its own component, so when you call it, it renders same format
//for every new post
//purpose: when new post is needed, and you click on button, this is called and returns template for new post. 
//takes props: 1)profileImage="urlLink" (will adjust this property's value when we plug in and know how to grab the users uploaded profile pic), 
//2. userName="string", 3.postContent="string"
//Also needs to return a post ID (time/data stamp?)
//example syntax to call newChit: <NewChit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" userName="tamoya" postContent="Tamoya's post"></NewChit>
class NewChit extends Component {
    state = {
        profileImage: "", 
        userName: "", 
        postContent: "", 
        timeStamp: ""
    }

    timeStamp = ()=>{
        let today = new Date();
        let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()      
        // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        return dateTime}
    render(){
        return(
            <Grid.Row>
                <Grid id="chitPost-Container" columns={2} divided >
                    <Grid.Column width={2}>
                        <Grid.Row><div id="userProfileDiv"><Image class="userPostProfileImage" src={this.props.profileImage} alt="Profile_Image"></Image></div></Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Grid.Row>{this.props.userName} | {this.timeStamp()}</Grid.Row>
                        <Grid.Row><p>{this.props.postContent}</p></Grid.Row>
                    </Grid.Column>
                </Grid>
            </Grid.Row>
        )
    }
}

export default NewChit; 
