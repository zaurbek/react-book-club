import React from 'react';
import PropTypes from 'prop-types';
import { Container, List } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'


const FrontPage = ({auth}) => (
  <div>
  {auth?<Redirect to="/all"/>:<div><div className='jumbotron'>
                    <div className='jumbo-names'>
                        <h1><i className="fa fa-book" aria-hidden="true"/>
                            React Book Club</h1>
                        <h4>Start trading books Today!</h4>
                    </div>
                </div>
                <Container text className='frontpage'>
                    <h1>Features:</h1>
                    <List className='features-list' ordered divided relaxed >
                        <List.Item>
                            <List.Content>
                                <List.Header>View all books posted by any user</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header>Add books by yourself</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header><strike>Update settings to store full name, city, and state</strike></List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header>Propose a trade and wait for the other user to accept the trade</List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                    <hr />
                     <h4 className="ui right aligned tiny header"><a href="https://github.com/zzhakupov/react-book-club" target="_blank">@zzhakupov</a></h4>

                </Container></div>}
                </div>
);

FrontPage.propTypes= {
  auth: PropTypes.bool.isRequired
}

export default FrontPage;