import React, { Component } from 'react';

class AuthForm extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label>E-mail</label>
            <input />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password"/>
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
