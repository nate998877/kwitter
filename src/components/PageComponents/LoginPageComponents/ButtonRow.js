import React, { Component } from "react";
import { Button, Modal, Header } from "semantic-ui-react";
import NewUserForm from "./NewUserForm"

class ButtonRow extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Take part in the Chittering</h2>
        <div id='buttonRow'>
          {/* This button should probably be removed  */}
          <Button disabled={this.props.isLoading}>
            Forgotten Password
          </Button>
          <Modal
            trigger={<Button type="submit" disabled={this.props.isLoading} id="createUser">Create Account</Button>}
            size='small'
          >
            <Header content="New User Form" />
            <Modal.Content onClick={(e) => { e.stopPropagation() }}>
              <NewUserForm />
            </Modal.Content>
          </Modal>
        </div>
      </React.Fragment>
    )
  }
}

export default ButtonRow; 
