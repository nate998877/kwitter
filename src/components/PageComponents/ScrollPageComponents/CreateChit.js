import React, { Component } from "react";
import { Modal, Button, Form, Image, Icon } from "semantic-ui-react";

class CreateChit extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = (event) => {
    if(event){
      this.setState({ modalOpen: false })
    } 

    setTimeout(
      ()=>{if(this.state.isUserFormValid) this.setState({ modalOpen: false })}, 
      300
    )
  }

  handleSubmitNewPost = event => {
    alert("Post submitted ");
    this.handleClose();
  };

  //this.props.messages.likes.length
  //this.props.messages.length

  render() {
    return (
      <Modal
        trigger={
          <Button>
            <img src={this.props.acorn} onClick={this.handleOpen} alt="acorn" />
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Whats on your mind? Submit new chit!</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="small" src={this.props.acorn} />
          <Form>
            <Form.Input
              placeholder="Enter a Chit Topic"
              name="chitTopic"
              type="text"
            />
            <Form.TextArea placeholder="Insert Chit" />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleSubmitNewPost} primary>
            Add New Chit!
            <Icon name="right chevron" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CreateChit;