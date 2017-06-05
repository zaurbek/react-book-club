import React, { Component } from 'react';
import {Menu, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class TopMenu extends Component {
  render() {
    return (
      <Menu >
    <Menu.Item><Link to='/' className='logo'><i className="fa fa-book" aria-hidden="true"/> React-Book-Club</Link></Menu.Item>
    <Menu.Menu position="right">
      {this.props.auth
        ? <Menu.Item><img className="profile_img" src={this.props.user.avatar_url}/><Link to='/profile'>{this.props.user.name}</Link></Menu.Item>
        : null}
      {this.props.auth
        ? <Menu.Item>
            <Button secondary onClick={() => this.props.githubLogout(this.props.history)}>Logout</Button>
          </Menu.Item>
        : <Menu.Item>
          <a
            className='button ui secondary'
            href='/redirect/github/auth'>

            <i className="fa fa-github" aria-hidden="true"/> Login with Github
          </a>
        </Menu.Item>}
    </Menu.Menu>
  </Menu>
    )
  }
  
}

TopMenu.propTypes = {
  auth: PropTypes.bool.isRequired,
  user: PropTypes.object,
  githubLogout: PropTypes.func.isRequired
};

export default TopMenu;