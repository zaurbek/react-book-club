import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {Button, Image, Container, Grid, Segment} from 'semantic-ui-react';

class MyBooks extends Component {
  constructor(props) {
    super(props);
  }
  searchBook() {
    if (this.Input.value.length > 0) {
      this
        .props
        .searchBook(this.props.id, this.Input.value);
      this.Input.value = '';
    } else {
      this
        .Input
        .focus();
    }
  }
  render() {
    

    if (this.props.auth) {
      let showRequestedBy = false;
      let RequestedBy = 0;
      let showRequestedFrom = false;
      let RequestedFrom = 0;
      this.props.books.forEach(item=>{
        if (item.requested.by===this.props.id&&item.requested.value) {
          RequestedBy++;
          showRequestedBy=true;
        }
        if (item.requested.value&&item.owner===this.props.id) {
          RequestedFrom++;
          showRequestedFrom=true;
        }
      })
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
            <div
              style={{
              clear: 'both',
              marginBottom: '25px'
            }}/> {this
              .props
              .books
              .map((item) => {

                return <div key={item._id} className="book-cover">
                  <Image className="book-card" src={item.image} alt={item.name} size="small"/>
                  <div
                    onClick={this.props.id !== item.owner && !item.requested.value
                    ? () => this
                      .props
                      .tradeBook(item._id, this.props.id)
                    : null}
                    className={this.props.id !== item.owner && !item.requested.value
                    ? "overlay-request"
                    : ''}><i className="fa fa-exchange" aria-hidden="true"/></div>
                </div>;

              })}
          </Container>
        </div>
      );
    }
    return <Redirect to="/"/>;
  }
}

MyBooks.propTypes = {
  auth: PropTypes.bool.isRequired,
  tradeBook: PropTypes.func.isRequired,
  denyTrade: PropTypes.func.isRequired,
  confirmTrade: PropTypes.func.isRequired,
  id: PropTypes.number,
  books: PropTypes.array
};

export default MyBooks;
