import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import currentUserQuery from '../queries/user';

class RequireAuth extends Component {
  componentDidMount() {
    const { loading, user } = this.props.data;
    if (!loading && !user) {
      hashHistory.push('/login');
    }
  }
}

graphql(currentUserQuery)(RequireAuth);
