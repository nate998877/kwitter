
import React, { Component } from "react";
import { connect } from 'react-redux'
import { Modal, Button, Form, Image, Icon } from 'semantic-ui-react'
import { createMessageAction as createChit} from "../../../actions"

class CreateChit extends Component {
  state={
    token: this.props.token
  }
  submitNewPost = e => {
    e.preventDefault();
    this.props.createChit(this.state)

  }
  handleChange = e => {
    this.setState({text:e.target.value})

  }
  render() {
    return (
      <Modal trigger={<Button > <img src={this.props.acorn} alt="acorn" /></Button>}>
        <Modal.Header>Whats on your mind? Submit new chit!</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='small' src={this.props.acorn} />
          <Form onSubmit={this.submitNewPost}>
            {/* <Form.Input placeholder='Enter a Chit Topic' name='chitTopic' type="text" /> */}
            <Form.TextArea placeholder="Insert Chit" style={{width:'100%'}} onChange={this.handleChange}/>
          <Button type='submit' primary>
            Add New Chit!<Icon name='right chevron' />
          </Button>
          </Form>
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
}

// export default CreateChit



export default connect(({ auth })=>{
  return {
    token: auth.token
  }
},{createChit})(CreateChit);
