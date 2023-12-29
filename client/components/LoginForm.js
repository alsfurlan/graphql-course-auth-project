import React, { Component } from 'react';
import AuthForm from './AuthForm';
import login from '../mutations/login';
import query from '../queries/user';
import { graphql } from 'react-apollo';

class LoginForm extends Component {
  onSubmit(email, password) {
    this.props.mutate({
      variables: { email, password },      
    });
  }

  render() {
    return (
      <div className='container'>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(login)(LoginForm);
