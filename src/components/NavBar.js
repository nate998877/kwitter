import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Route, Switch, Link} from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: "Profile" }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    console.log(this.state)
  }

  render() {
    const { activeItem } = this.state

    return (
      <div id="navBar-Container">
        <Menu pointing secondary>
          <Menu.Item
            name='Acorn Feed'
            href="/newsfeed"
            active={activeItem === 'Acorn Feed'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='New Post'
            active={activeItem === 'New Post'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item name='Profile' href="/profile" active={activeItem === 'Profile'} onClick={this.handleItemClick} />
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
