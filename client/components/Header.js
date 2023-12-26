import React, { Component } from 'react';
import query from '../queries/user';
import { graphql } from 'react-apollo';

class Header extends Component {
  render() {
    const { loading, user } = this.props.data;
    if (loading) return <div />;

    return <div>{user ? 'Logout' : 'Sign Up/Login'}</div>;
  }
}

export default graphql(query)(Header);
