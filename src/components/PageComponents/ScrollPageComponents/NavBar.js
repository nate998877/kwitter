import { logoutLoggedInUser as logout } from "../../../actions"
import acorn from '../../../pictures/acorn.png'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { CreateChit } from "."

class NavBar extends Component {
  state = { activeItem: "Acorn Feed" } //This is the source of the defaulting to acorn feed error. To fix change to check for a this.props.currentwindow or something, then default to an errorcatch

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleLogout = (e, elem) => {
    this.handleItemClick(e, elem)
    e.preventDefault();
    this.props.logout(this.state)
    this.setState({logout:true})
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
          <Menu.Item name='New Post' active={activeItem === 'New Post'} >
            <CreateChit acorn={acorn} />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='Profile'  href="/profile" active={activeItem === 'Profile'} onClick={this.handleItemClick} />
            <Menu.Item
              name='Logout'
              active={activeItem === 'Logout'}
              onClick={this.handleLogout}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
export default connect(null,
  { logout }
  )(NavBar); 
