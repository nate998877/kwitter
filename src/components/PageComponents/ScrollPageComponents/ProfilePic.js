

import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
class ProfilePic extends Component {
  render() {
    return (
      <Grid columns={2} id="profilePic" >
        <Grid.Column>
          <Grid.Row>
            <Image src={this.props.defaultSquirrel} alt="Profile Picture" />
          </Grid.Row>
          <Grid.Row>
            <Button type="submit" disabled={this.props.isLoading}><img src={this.props.settings} alt="new" /></Button>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column id="coverPic" />
      </Grid>
    )
  }
}

export default ProfilePic; 
