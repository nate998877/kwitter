import React, { Component } from "react";
import { Button, Modal, Header } from "semantic-ui-react";
import NewUserForm from "./NewUserForm"

class ButtonRow extends Component {
  state = { modalOpen: false }
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

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
            open = {this.state.modalOpen}
            onClose = {this.handleClose}
            trigger={<Button type="submit" onClick={this.handleOpen} disabled={this.props.isLoading} id="createUser">Create Account</Button>}
            size='small'
          >
            <Header content="New User Form" />
            <Modal.Content onClick={(e) => { e.stopPropagation() }}>
              <NewUserForm onClose = {this.handleClose} />
            </Modal.Content>
          </Modal>
        </div>
      </React.Fragment>
    )
  }
}

export default ButtonRow; 
