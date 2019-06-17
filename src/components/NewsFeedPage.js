import React, { Component } from "react";
import { Grid, Image, Segment, SegmentGroup } from "semantic-ui-react";
import NavBar from "./NavBar";
import NewChit from "./NewChit"

class NewsFeedPage extends Component {
    state = {}

    render(){
        console.log("We are firing off")
        return(
            <React.Fragment>
                <Grid.Row>
                    <NavBar/>
                </Grid.Row>
                <Grid id="newsFeedContainer" columns={3} divided centered >
                    <Grid.Column id="left-Col" width={4} >
                        <SegmentGroup class="left-ColDash">
                                <h2>TOP CHITS...</h2>
                            <Segment vertical color="black" padded loading>
                                <Grid.Row>[insert chit here]</Grid.Row>
                                <Grid.Row>[insert chit here]</Grid.Row>
                                <Grid.Row>[insert chit here]</Grid.Row>
                            </Segment>
                            <h2>TOP WORDS...</h2>
                            <Segment vertical color="black" padded loading>
                                <Grid.Row>[insert chit here]</Grid.Row>
                                <Grid.Row>[insert chit here]</Grid.Row>
                            </Segment>
                            <h2>TOP SQUIRRELS and ELITES...</h2>
                            <Segment vertical color="black" padded loading>
                                <Grid.Row>[insert chit here]</Grid.Row>
                                <Grid.Row>[insert chit here]</Grid.Row>
                                <Grid.Row>[insert chit here]</Grid.Row>
                            </Segment>
                        </SegmentGroup>
                    </Grid.Column>
                    <Grid.Column id="mid-Col" width={8} >
                        <Grid.Row><h1>LATEST CHITS...</h1></Grid.Row>
                        <NewChit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" userName="UserName" postContent="This is my first chit"></NewChit>
                    </Grid.Column>
                    <Grid.Column id="right-Col" width={1} >
                        <Grid.Row><h2>Visit secretsquirrels.com/ads <br/> to <br/> POST YOUR ADD HERE!</h2></Grid.Row>
                    </Grid.Column>
                </Grid>

            </React.Fragment>

        )
    }
}

export default NewsFeedPage; 