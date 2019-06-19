

import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import { UpdatePhotoModal } from "."
import { connect } from "react-redux"
import { getUserPhotoAction as getUserPhoto } from "../../../actions"
import acorn from "../../../pictures/acorn.png"

class ProfilePic extends Component {
  state = {}
  componentDidMount(){
    this.props.getUserPhoto().then((response)=>{
      response.payload.blob().then(image =>{
        const userPhoto = URL.createObjectURL(image)
        this.setState({userPhoto:userPhoto})
      })
    })
  }

  render() {
    return (
      <Grid columns={2} id="profilePic" >
        <Grid.Column>
          <Grid.Row>
            <Image src={this.state.userPhoto || this.props.defaultSquirrel} alt="Profile Picture" />
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

export default connect(({auth, user})=>({
  token: auth.token,
})
,{ getUserPhoto })(ProfilePic);