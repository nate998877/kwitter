import React, { Component } from 'react'
import { Redirect } from "react-router"
import { Menu } from 'semantic-ui-react'
import { connect } from "react-redux";
import { logoutLoggedInUser as logout } from "../actions";

class NavBar extends Component {
  state = { activeItem: 'home' }

  componentDidMount(){
    this.setState({...this.state, token:this.props.token})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = (e, elem) => {
    this.handleItemClick(e, elem)
    e.preventDefault();
    this.props.logout(this.state)
    this.setState({logout:true})
  }


  render() {
    const { activeItem } = this.state

    return (
      <div id="navBar-Container">
        {this.state.logout ? <Redirect to="/" /> : ""}
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
              onClick={this.handleLogout}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


export default connect(
  ({ auth }) => {
    return ({
    isLoading: auth.loginLoading,
    err: auth.loginError,
    token: auth.login && auth.login.token || null 
  })},
  { logout }
)(NavBar);
