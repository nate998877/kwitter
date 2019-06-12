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
                <Grid columns={2} divided>
                    <Grid.Column>
                        <Grid.Row><Image class="userPostProfileImage" src={this.props.profileImage} alt="Profile_Image"></Image></Grid.Row>
                        <Grid.Row><p>{this.props.userName}</p></Grid.Row>
                        <Grid.Row><p>{this.timeStamp()}</p></Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <p>{this.props.postContent}</p>
                    </Grid.Column>
                </Grid>
            </Grid.Row>
        )
    }
}

export default NewChit; 
