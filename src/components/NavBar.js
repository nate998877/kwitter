import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="navBar-Container">
        <Menu pointing secondary>
          <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Acorn Feed'
            active={activeItem === 'Acorn Feed'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Friends'
            active={activeItem === 'Friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
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