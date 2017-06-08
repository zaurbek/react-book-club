import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Input, Button, Image, Container, Card } from 'semantic-ui-react';

class MyBooks extends Component {
  constructor(props) {
    super(props);
  }
  searchBook() {
    if (this.Input.value.length > 0) {
      this.props.searchBook(this.props.id, this.Input.value);
      this.Input.value = '';
    } else {
      this.Input.focus();
    }
  }
  render() {
    if (this.props.auth) {
      return (
      <div>


        <Container className="my-books">
          <div className="ui input">
          <input type="text" ref={input => this.Input = input} placeholder="search for a book..." />
          <Button secondary onClick={() => this.searchBook()}>Search for a Book</Button>
        </div>

          <div style={{ clear: 'both', marginBottom: '25px' }} />
          {this.props.books.map((item) => {
            if (item.owner==this.props.userID) {
             return <div key={item._id} className='book-cover'><Image className='book-card' src={item.image} alt={item.name} size='small' /><div className='overlay'/></div>
            }
            })}
        </Container>
      </div>
    );
    }
    return <Redirect to="/" />;
  }
}


MyBooks.propTypes = {
  auth: PropTypes.bool.isRequired,
  userID: PropTypes.number,
  id: PropTypes.number,
  books: PropTypes.array
};

export default MyBooks;