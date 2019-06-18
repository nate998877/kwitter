
import React, { Component } from "react";
import { Modal, Button, Form, Image, Icon } from 'semantic-ui-react'

class CreateChit extends Component {
  submitNewPost() {
    alert("Post submitted ")
  }

  //this.props.messages.likes.length
  //this.props.messages.length

  render() {
    return (
      <Modal trigger={<Button > <img src={this.props.acorn} alt="acorn" /></Button>}>
        <Modal.Header>Whats on your mind? Submit new chit!</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='small' src={this.props.acorn} />
          <Form>
            <Form.Input placeholder='Enter a Chit Topic' name='chitTopic' type="text" />
            <Form.TextArea placeholder="Insert Chit" />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.submitNewPost} primary>
            Add New Chit!<Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default CreateChit