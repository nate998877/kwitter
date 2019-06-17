import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
//pulled this from the feed page and broke it out to its own component, so when you call it, it renders same format
//for every new post
//purpose: when new post is needed, and you click on button, this is called and returns template for new post. 
//takes props: 1)profileImage="urlLink" (will adjust this property's value when we plug in and know how to grab the users uploaded profile pic), 
//2. username="string", 3.postContent="string"
//Also needs to return a post ID (time/data stamp?)
//example syntax to call Chit: <Chit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" username="tamoya" postContent="Tamoya's post"></Chit>
class Chit extends Component {
    render() {
        return (
            <Grid.Row>
                <Grid columns={2} divided>
                    <Grid.Column>
                        <Grid.Row><Image className="userPostProfileImage" src={this.props.profileImage} alt="Profile_Image"></Image></Grid.Row>
                        <Grid.Row><p>{this.props.username}</p></Grid.Row>
                        <Grid.Row><p>{new Date().toDateString()}</p></Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <p>{this.props.content}</p>
                    </Grid.Column>
                </Grid>
            </Grid.Row>
        )
    }
}

export default Chit; 
