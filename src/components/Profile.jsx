import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Input, Form, Button, Image} from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.auth) {
      return (
        <Container text className='frontpage'>
          <Image shape='rounded' centered size='small' src={this.props.user.avatar_url}/>
          <Form >
            <Form.Field>
              <label>Full Name</label>
              <input placeholder={`${this.props.user.name}...`}/>
            </Form.Field>
            <Form.Field>
              <label>Location:</label>
              <input placeholder={`${this.props.user.location}...`}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>

        </Container>
      )
    }
    return (<Redirect to='/'/>)

  }
}

export default Profile;