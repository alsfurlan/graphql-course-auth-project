import React, { Component } from 'react';
import query from '../queries/user';
import mutation from '../mutations/logout';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class Header extends Component {

  logout() {
    this.props.mutate({}).then(() => this.props.data.refetch());
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) return <div />;

    if (user) {
      return (
        <li>
          <a onClick={() => this.logout()}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo left'>
            Home
          </Link>
          <ul className='right'>{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
