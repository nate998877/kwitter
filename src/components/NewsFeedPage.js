import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import {NavBar, Chit} from '.'

class NewsFeedPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid.Row> <NavBar /> </Grid.Row>
                <Grid id="newsFeedContainer" columns={3} divided>
                    <Grid.Column id="left-Col" />
                    {/* each post needs two fetches a userphoto and a username fetch this should be handled in a general location */}
                    {/* {this.props.posts.map(post => {return( <Chit username={post.username} content={post.text} profileImage={post.image}/>)})} */}
                    <Grid.Column id="mid-Col"> The map in the comment above goes here, but won't properly render until an array of post objects is passed to the newsfeedpage. post needs a username, text and image </Grid.Column>
                    <Grid.Column id="right-Col" />
                </Grid>
            </React.Fragment>
        )
    }
}

export default NewsFeedPage; 