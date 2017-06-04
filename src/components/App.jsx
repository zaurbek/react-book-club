import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {Input, Menu, Button, Card, Image} from 'semantic-ui-react';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const token = Cookies.get('token');
        if (token && !this.props.auth) {
            this
                .props
                .githubLogin(token);
        }
    }
    render() {
        return (
            <div>
                <Menu >
                    <Menu.Item><i className="fa fa-book" aria-hidden="true"/>
                        React-Book-Club</Menu.Item>
                    <Menu.Menu position="right">
                        {this.props.auth ? <Menu.Item><img className="profile_img" src={this.props.user.avatar_url} />{this.props.user.name}</Menu.Item> : null}
                        {this.props.auth
                            ? <Menu.Item>
                                        <Button inverted color="blue" onClick={() => this.props.githubLogout()}>Logout asdf as afsd asdf asdf</Button>
                                </Menu.Item>
                            : <Menu.Item>
                                <a className='button ui inverted violet'
                                    href="http://github.com/login/oauth/authorize?client_id=86aff9e326ea4271199d&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fauth%2Fgithub&scope=user">
                                
                                    Login with <i className="fa fa-github" aria-hidden="true"/> Github
                                </a>
                            </Menu.Item>}
                    </Menu.Menu>
                </Menu>

            </div>
        );
    }
}

App.propTypes = {
    auth: PropTypes.bool.isRequired,
    githubLogin: PropTypes.func.isRequired,
    githubLogout: PropTypes.func.isRequired
};

export default App;
