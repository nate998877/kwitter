import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import NavBar from "../PageComponents/ScrollPageComponents/NavBar";
import Chit from "../PageComponents/ScrollPageComponents/Chit"
import ChitGroups from "../PageComponents/ScrollPageComponents/ChitGroups";
import ChitFeed from "../../components/PageComponents/ScrollPageComponents/ChitFeed"

class NewsFeedPage extends Component {
  state = {}
  render(){
    return(
      <React.Fragment>
        <Grid.Row>
            <NavBar/>
        </Grid.Row>
        <Grid id="newsFeedContainer" columns={3} divided centered >
          <Grid.Column id="left-Col" width={4} >
            <ChitGroups />
          </Grid.Column>
          <Grid.Column id="mid-Col" width={8} >
            <Grid.Row><h1>LATEST CHITS...</h1></Grid.Row>
            <ChitFeed></ChitFeed>
            {/* <Chit profileImage="http://3rdpartyservicesofflorida.com/wp-content/uploads/2015/03/blank-profile.jpg" username="UserName" Content="This is my first chit" /> */}
          </Grid.Column>
          <Grid.Column id="right-Col" width={1} >
            <Grid.Row><h2>Visit secretsquirrels.com/ads <br/> to <br/> POST YOUR ADD HERE!</h2></Grid.Row>
          </Grid.Column>
        </Grid>
        <div id="background" />
      </React.Fragment>
    )
    }
}

export default NewsFeedPage; 