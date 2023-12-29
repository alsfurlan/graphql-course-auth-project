import React, { Component } from 'react';
import AuthForm from './AuthForm';
import currentUserQuery from '../queries/user';
import signupMutation from '../mutations/signup';
import { graphql } from 'react-apollo';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  onSubmit(email, password) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: currentUserQuery }],
      })
      .catch((response) => {
        const errors = response.graphQLErrors.map(({ message }) => message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div className='container'>
        <h3>Sign Up</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(currentUserQuery)(graphql(signupMutation)(SignupForm));
