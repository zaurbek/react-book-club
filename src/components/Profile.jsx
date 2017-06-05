import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Input, Form, Button, Image} from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  submitForm() {

    const parsedObject = {
      id: this.props.user.id,
      name: this.InputName.value
        ? this.InputName.value
        : this.props.user.name,
      location: this.InputLocation.value
        ? this.InputLocation.value
        : this.props.user.location
    }
    if (this.InputName.value || this.InputLocation.value) {
      this.props.userSettings(parsedObject, this.props.history);
    }

  }
  render() {
    if (this.props.auth) {
      return (
        <Container text className='frontpage'>
          <Image shape='rounded' centered size='small' src={this.props.user.avatar_url}/>
          <h2>Change my personal information:</h2>
          <Form >
            <Form.Field>
              <label>Full Name:</label>
              <input
                ref={(input) => this.InputName = input}
                placeholder={`${this.props.user.name}...`}/>
            </Form.Field>
            <Form.Field>
              <label>Location:</label>
              <input
                ref={(input) => this.InputLocation = input}
                placeholder={`${this.props.user.location}...`}/>
            </Form.Field>
            <Button type='button' primary onClick={() => this.submitForm()}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>Submit</Button>
          </Form>

        </Container>
      )
    }
    return (<Redirect to='/'/>)

  }
}

export default Profile;