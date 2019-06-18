import React, { Component } from "react";
import { Modal, Header, Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux"
import { updateUserPhotoAction as updateUserPhoto } from "../../../actions"

class ProfilePic extends Component {
  
  formSubmit = event =>{
    event.preventDefault()
    console.log(event.target)
    const form = new FormData(event.target)
    for(let each of form.entries()){
      console.log(each)
    }
    this.props.updateUserPhoto({form:form, userId: this.props.id, token: this.props.token})
  }

  render() {
    return (
      <Modal
      trigger={<div id="settings">
        <Button type="submit" disabled={this.props.isLoading}>
          <img src="src/settingsAcorn.png" alt="new" />
        </Button>
      </div>}
      size='small'
    >
      <Header content="New User Form" />
      <Modal.Content>
        <Form onSubmit={this.formSubmit}>
            <Input type="file" name="picture"></Input>
            <br />
            <Button type="submit">uploadPhoto</Button>
        </Form>
      </Modal.Content>
    </Modal>
    )
  }
}

export default connect( null,
  { updateUserPhoto }
  )(ProfilePic)