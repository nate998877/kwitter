import React, { Component } from 'react'
import { Menu, Image, Icon, Modal, Form, Button } from 'semantic-ui-react'
import {Route, Switch, Link} from 'react-router-dom'
import UserProfile from './UserProfile';
import acorn from './acorn.png'
import NewChit from './NewChit'; 


class NavBar extends Component {
  state = { activeItem: "Acorn Feed" }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    console.log(this.state)
  }
  //will replace form below with the NewChit component
  newChit = () => (
    <Modal trigger={<Button onClick={this.newChit}> <img src={acorn} alt="acorn image"/>Test Chit Modal</Button>}>
    <Modal.Header>Whats on your mind? Submit new chit!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='small' src={acorn}/>
      <Form>
        <Form.Input placeholder='Enter a Chit Topic' name='chitTopic' type="text"/>
        <Form.TextArea placeholder="Insert Chit" />
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button  onClick={this.submitNewPost} primary>
        Add New Chit!<Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
  )
  submitNewPost = () => alert("Post submitted ")
  


  render() {
    let { activeItem } = this.state

    return (
      <div id="navBar-Container">
        <Menu pointing secondary>
          <Menu.Item
            name='Acorn Feed'
            href="/newsfeed"
            active={activeItem === 'Acorn Feed'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name='New Post' active={activeItem === 'New Post'} onClick={this.newChit}>
            {this.newChit()}
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='Profile'  href="/profile" active={activeItem === 'Profile'} onClick={this.handleItemClick} />
            <Menu.Item
              name='Logout'
              active={activeItem === 'Logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
export default NavBar; 
