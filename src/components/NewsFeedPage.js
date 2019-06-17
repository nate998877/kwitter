import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import {NavBar, Chit} from '.'

class NewsFeedPage extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Grid.Row>
                    <NavBar />
                </Grid.Row>
                <Grid id="newsFeedContainer" columns={3} divided>
                    <Grid.Column id="left-Col"></Grid.Column>
                    <Grid.Column id="mid-Col">
                        <Grid.Row>
                            <Grid columns={2} divided>
                                <Grid.Column>
                                    <Grid.Row><Image class="userPostProfileImage" src="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg"></Image></Grid.Row>
                                    <Grid.Row><p>UserName</p></Grid.Row>
                                </Grid.Column>
                                <Grid.Column>
                                    <p>#ACRO - "This is my first post.  Just want to say...YOLO!</p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column id="right-Col"></Grid.Column>
                </Grid>

            </React.Fragment>

        )
    }
}

export default NewsFeedPage; 