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
                    <Grid.Column id="mid-Col"> {this.props.posts.map(post => {return( <Chit username={post.id} content={post.text} profileImage={post.image}/>)})} </Grid.Column>
                    <Grid.Column id="right-Col" />
                </Grid>
            </React.Fragment>
        )
    }
}

export default NewsFeedPage; 