import React from 'react';
export default class Register extends React.Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="signup-form">
          <h2>New User Signup!</h2>
          <form action="#">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
            <button type="submit" className="btn btn-default">Signup</button>
          </form>
        </div>
      </div>
    )
  }
}

