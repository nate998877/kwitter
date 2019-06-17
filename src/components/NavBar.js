import React, { Component } from 'react'
import acorn from '../pictures/acorn.png'
import { Menu, Image, Icon, Modal, Form, Button } from 'semantic-ui-react'
import CreateChit from "./CreateChit"

class NavBar extends Component {
  state = { activeItem: "Acorn Feed" }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    let { activeItem } = this.state
    return (
      <div id="navBar-Container">
        <Menu pointing secondary>
          <Menu.Item
            name='Acorn Feed'
            href="/newsfeed"
            active={activeItem === 'Acorn Feed'} //This is the source of the defaulting to acorn feed error. To fix change to check for a this.props.currentwindow or something, then default to an errorcatch
            onClick={this.handleItemClick}
          />
          <Menu.Item name='New Post' active={activeItem === 'New Post'} >
            <CreateChit acorn={acorn} />
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
