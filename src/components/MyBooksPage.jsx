import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';

class MyBooks extends Component {
  constructor(props) {
    super(props);
  }
  searchBook() {
    if (this.Input.value.length>0) {
      this.props.searchBook(this.props.id, this.Input.value);
    } else {
      this.Input.focus();
    }


  }
  render() {
    if (this.props.auth) {
    return (
      <div>
        <input className='ui input' ref={(input)=>this.Input=input} placeholder='search for a book...'/>
        <Button onClick={()=>this.searchBook()}/>
      </div>
    )

  
    }
    return <Redirect to='/'/>
  }
}


MyBooks.propTypes = {
  auth: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  searchBook: PropTypes.func.isRequired,
}

export default MyBooks;