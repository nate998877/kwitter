import React, { Component } from 'react'
import { Menu, Image, Icon } from 'semantic-ui-react'
import {Route, Switch, Link} from 'react-router-dom'
import UserProfile from './UserProfile';
import acorn from './acorn.png'

class NavBar extends Component {
  state = { activeItem: "Acorn Feed" }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    console.log(this.state)
  }

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
          <Menu.Item name='New Post' active={activeItem === 'New Post'} onClick={this.handleItemClick}>
            <img src={acorn}/> New Chit
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
