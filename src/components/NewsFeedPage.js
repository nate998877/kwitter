import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import NavBar from "./NavBar";
<<<<<<< HEAD
import Scrolling from "./scroll"
=======
import NewChit from "./NewChit"
>>>>>>> 9d30d1945b51d4deb618a636a0cfb607070acaaf

class NewsFeedPage extends Component {
    state = {}

    render(){
        console.log("We are firing off")
        return(
            <React.Fragment>
                <Grid.Row>
                    <NavBar/>
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
<<<<<<< HEAD
=======
                        {/* delete "NewChit" line below - input here just for testing purposes */}
                        <NewChit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" userName="tamoya" postContent="Tamoya's post"></NewChit>
>>>>>>> 9d30d1945b51d4deb618a636a0cfb607070acaaf
                    </Grid.Column>
                    <Grid.Column id="right-Col"></Grid.Column>
                </Grid>

            </React.Fragment>

        )
    }
}

export default NewsFeedPage; 