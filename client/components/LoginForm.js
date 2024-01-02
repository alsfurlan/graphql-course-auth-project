import React, { Component } from 'react';
import AuthForm from './AuthForm';
import login from '../mutations/login';
import query from '../queries/user';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentWillUpdate(nextPros) {
    if(this.props.data.user === null && nextPros.data.user) { 
      hashHistory.push('/dashboard')  
    }
  }

  onSubmit(email, password) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }],
      })
      .catch((error) => {
        const errors = error.graphQLErrors.map(({ message }) => message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div className='container'>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(query)(graphql(login)(LoginForm));
