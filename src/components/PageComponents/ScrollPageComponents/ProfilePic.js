

import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import { UpdatePhotoModal } from "."
import acorn from "../../../pictures/acorn.png"
class ProfilePic extends Component {
  render() {
    return (
      <Grid columns={2} id="profilePic" >
        <Grid.Column>
          <Grid.Row>
            <Image src={this.props.defaultSquirrel} alt="Profile Picture" />
          </Grid.Row>
          <Grid.Row>
            <UpdatePhotoModal isLoading={this.props.isLoading} acorn={acorn} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column id="coverPic" />
      </Grid>
    )
  }
}

export default ProfilePic; 
