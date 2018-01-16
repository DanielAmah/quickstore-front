import React from 'react';
import Header from "../home/header/Header.jsx";
import Footer from "../home/footer/Footer.jsx";
import Login from "../auth/login/Login.jsx";
import Register from "../auth/register/Register.jsx";

export default class Auth extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <section id="form">
      <div className="container">
        <div className="row">
          <Register />
          <div className="col-sm-1">
            <h2 className="or">OR</h2>
          </div>
          <Login />
        </div>
      </div>
    </section>
    
      <Footer />
      </div>
    )
  }
}
