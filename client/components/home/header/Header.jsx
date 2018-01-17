import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../../images/home/logo.png';
import {signOutAction} from '../../../actions/signOutAction';

class Header extends React.Component {

  signout=(event)=>{
    event.preventDefault();
    this.props.signOutAction();
  }
  navbarLinks() {
    if (this.props.authenticated) {
      return (
        <div>
        <li><a href="#"><i className="fa fa-user"></i> Account</a></li>
        <li><a href="#"><i className="fa fa-star"></i> Wishlist</a></li>
        <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li>
        <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
        <li>
        <a 
        onClick={this.signout}
        href="/">
        <i className="fa fa-lock"></i>Signout</a></li>
        </div>
      );
    }
    return (
      <div>
      <li><a href="#"><i className="fa fa-user"></i> Account</a></li>
      <li><Link to="/auth"><i className="fa fa-lock"></i>Login/Register</Link></li>
      </div>
    );
  }

  dropdownLinks() {
    if (this.props.authenticated) {
      return (
      <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
      <ul role="menu" className="sub-menu">
      <li><a href="shop.html">Products</a></li>,
      <li><a href="product-details.html">Product Details</a></li>
      <li><a href="checkout.html">Checkout</a></li>
      <li><a href="cart.html">Cart</a></li>
      <li><Link to="/signout">Signout</Link></li> 
      </ul>
      </li> 
      );
    }
    return (
      <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
      <ul role="menu" className="sub-menu">
      <li><a href="shop.html">Products</a></li>
      <li><Link to="/auth">Login/Register</Link></li> 
      </ul>
      </li> 
    );
  }


  render() {
    return (
      <header id="header">
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li><a href="#"><i className="fa fa-phone"></i> +234 90 5259 1512</a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i> info@quickstore.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <Link to= "/"><img src={logo} alt="" /></Link>
              </div>
              <div className="btn-group pull-right">
                <div className="btn-group">
                  <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                    USA
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Canada</a></li>
                    <li><a href="#">UK</a></li>
                  </ul>
                </div>
                
                <div className="btn-group">
                  <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                    DOLLAR
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Canadian Dollar</a></li>
                    <li><a href="#">Pound</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                {this.navbarLinks()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li><Link to= "/" className="active">Home</Link></li>
                  {this.dropdownLinks()}
                  <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                                      <ul role="menu" className="sub-menu">
                                          <li><a href="blog.html">Blog List</a></li>
                      <li><a href="blog-single.html">Blog Single</a></li>
                                      </ul>
                                  </li> 
                  <li><a href="404.html">404</a></li>
                  <li><a href="contact-us.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps,{signOutAction})(Header);