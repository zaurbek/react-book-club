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
          <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Segment color='yellow'>Requested books ({RequestedBy}):</Segment>
                  {showRequestedBy?
                  <Segment.Group>
                    {this.props.books.map(item=>{
                      if (item.requested.by==this.props.id&&item.requested.value) {
                        return <Segment onClick={()=>this.props.denyTrade(item._id)}className='by-list'  key={item._id}>{item.name}</Segment>
                      }
                      
                    })}
                  </Segment.Group>:null}
                  
                </Grid.Column>
                <Grid.Column>
                  <Segment color='violet'>Books requested from you ({RequestedFrom}):</Segment>
                  {showRequestedFrom?
                  <Segment.Group>
                    {this.props.books.map(item=>{
                      if (item.owner==this.props.id&&item.requested.value) {
                        return <Segment onClick={()=>this.props.confirmTrade(this.props.id, item._id)} className='from-list' key={item._id}>{item.name}</Segment>
                      }
                      
                    })}
                  </Segment.Group>:null}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          <div className="ui input">
          <input type="text" ref={input => this.Input = input} placeholder="search for a book..." />
          <Button secondary onClick={() => this.searchBook()}>Add a Book</Button>
        </div>

          <div style={{ clear: 'both', marginBottom: '25px' }} />
          {this.props.books.map((item) => {
            if (item.owner==this.props.id) {
             return <div key={item._id} className='book-cover'><Image className='book-card' src={item.image} alt={item.name} size='small' /><div onClick={()=>this.props.deleteBook(item._id)}className='overlay'><i className="fa fa-times" aria-hidden="true"/></div></div>
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
  id: PropTypes.number,
  books: PropTypes.array,
  denyTrade: PropTypes.func.isRequired,
  confirmTrade: PropTypes.func.isRequired,
  searchBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default MyBooks;
