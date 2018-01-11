import React from 'react';
import '../css/price-range.css';
import '../css/animate.css';
import '../css/main.css';
import '../css/responsive.css';
require('../js/price-range.js');
require('../js/main.js');
import logo from '../images/home/logo.png';
import girl from '../images/home/girl1.jpg';
import girl2 from '../images/home/girl2.jpg';
import girl3 from '../images/home/girl3.jpg';
import pricing from '../images/home/pricing.png';
import product1 from "../images/home/product1.jpg";
import product2 from "../images/home/product2.jpg";
import product3 from "../images/home/product3.jpg";
import product4 from "../images/home/product4.jpg";
import product5 from "../images/home/product5.jpg";
import product6 from "../images/home/product6.jpg";
import shipping from "../images/home/shipping.jpg";
import new_ from "../images/home/new.png";
import sale from "../images/home/sale.png";
import gallery1 from "../images/home/gallery1.jpg";
import gallery2 from "../images/home/gallery2.jpg";
import gallery3 from "../images/home/gallery3.jpg";
import gallery4 from "../images/home/gallery4.jpg";
import recommend1 from "../images/home/recommend1.jpg";
import recommend2 from "../images/home/recommend2.jpg";
import recommend3 from "../images/home/recommend3.jpg";
import frame1 from "../images/home/iframe1.png";
import frame2 from "../images/home/iframe2.png";
import frame3 from "../images/home/iframe3.png";
import frame4 from "../images/home/iframe4.png";
import map from "../images/home/map.png";



export default class App extends React.Component {
  render() {
    return (
      <div>
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
                <a href="index.html"><img src={logo} alt="" /></a>
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
                  <li><a href="#"><i className="fa fa-user"></i> Account</a></li>
                  <li><a href="#"><i className="fa fa-star"></i> Wishlist</a></li>
                  <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li>
                  <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                  <li><a href="login.html"><i className="fa fa-lock"></i> Login</a></li>
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
                  <li><a href="index.html" className="active">Home</a></li>
                  <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                                      <ul role="menu" className="sub-menu">
                                          <li><a href="shop.html">Products</a></li>
                      <li><a href="product-details.html">Product Details</a></li> 
                      <li><a href="checkout.html">Checkout</a></li> 
                      <li><a href="cart.html">Cart</a></li> 
                      <li><a href="login.html">Login</a></li> 
                                      </ul>
                                  </li> 
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
    
    <section id="slider">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#slider-carousel" data-slide-to="1"></li>
                <li data-target="#slider-carousel" data-slide-to="2"></li>
              </ol>
              
              <div className="carousel-inner">
                <div className="item active">
                  <div className="col-sm-6">
                    <h1>Quickstore</h1>
                    <h2>An E-Commerce Application</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button type="button" className="btn btn-default get">Get it now</button>
                  </div>
                  <div className="col-sm-6">
                    <img src={girl} className="girl img-responsive" alt="" />
                    <img src={pricing} className="pricing" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="col-sm-6">
                    <h1>Quickstore</h1>
                    <h2>100% Quality Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button type="button" className="btn btn-default get">Get it now</button>
                  </div>
                  <div className="col-sm-6">
                    <img src={girl2} className="girl img-responsive" alt="" />
                    <img src={pricing}  className="pricing" alt="" />
                  </div>
                </div>
                
                <div className="item">
                  <div className="col-sm-6">
                    <h1>Quickstore</h1>
                    <h2>Discounted Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button type="button" className="btn btn-default get">Get it now</button>
                  </div>
                  <div className="col-sm-6">
                    <img src={girl3} className="girl img-responsive" alt="" />
                    <img src={pricing} className="pricing" alt="" />
                  </div>
                </div>
                
              </div>
              
              <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                <i className="fa fa-angle-left"></i>
              </a>
              <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Category</h2>
              <div className="panel-group category-products" id="accordian">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                        <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                        Sportswear
                      </a>
                    </h4>
                  </div>
                  <div id="sportswear" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li><a href="#">Nike </a></li>
                        <li><a href="#">Under Armour </a></li>
                        <li><a href="#">Adidas </a></li>
                        <li><a href="#">Puma</a></li>
                        <li><a href="#">ASICS </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                        <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                        Mens
                      </a>
                    </h4>
                  </div>
                  <div id="mens" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li><a href="#">Fendi</a></li>
                        <li><a href="#">Guess</a></li>
                        <li><a href="#">Valentino</a></li>
                        <li><a href="#">Dior</a></li>
                        <li><a href="#">Versace</a></li>
                        <li><a href="#">Armani</a></li>
                        <li><a href="#">Prada</a></li>
                        <li><a href="#">Dolce and Gabbana</a></li>
                        <li><a href="#">Chanel</a></li>
                        <li><a href="#">Gucci</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                        <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                        Womens
                      </a>
                    </h4>
                  </div>
                  <div id="womens" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li><a href="#">Fendi</a></li>
                        <li><a href="#">Guess</a></li>
                        <li><a href="#">Valentino</a></li>
                        <li><a href="#">Dior</a></li>
                        <li><a href="#">Versace</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Kids</a></h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Fashion</a></h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Households</a></h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Interiors</a></h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Clothing</a></h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Bags</a></h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Shoes</a></h4>
                  </div>
                </div>
              </div>
            
              <div className="brands_products">
                <h2>Brands</h2>
                <div className="brands-name">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#"> <span className="pull-right">(50)</span>Acne</a></li>
                    <li><a href="#"> <span className="pull-right">(56)</span>Grüne Erde</a></li>
                    <li><a href="#"> <span className="pull-right">(27)</span>Albiro</a></li>
                    <li><a href="#"> <span className="pull-right">(32)</span>Ronhill</a></li>
                    <li><a href="#"> <span className="pull-right">(5)</span>Oddmolly</a></li>
                    <li><a href="#"> <span className="pull-right">(9)</span>Boudestijn</a></li>
                    <li><a href="#"> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="price-range">
                <h2>Price Range</h2>
                <div className="well text-center">
                   <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                   <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
                </div>
              </div>
          
              
              <div className="shipping text-center">
                <img src={shipping} alt="" />
              </div>
            
            </div>
          </div>
          
          <div className="col-sm-9 padding-right">
            <div className="features_items">
              <h2 className="title text-center">Features Items</h2>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                      <div className="productinfo text-center">
                        <img src={product1} alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                      </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={product2} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={product3} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={product4} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                    </div>
                    <img src={new_} className="new" alt="" />
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={product5} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                    </div>
                    <img src={sale} className="new" alt="" />
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={product6} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                      <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="category-tab">
              <div className="col-sm-12">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
                  <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                  <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                  <li><a href="#kids" data-toggle="tab">Kids</a></li>
                  <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active in" id="tshirt" >
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery1} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery2} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery3} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery4} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="tab-pane fade" id="blazers" >
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery4} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery3} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery2} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery1} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="tab-pane fade" id="sunglass" >
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery3} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery4} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery1} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery2} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="tab-pane fade" id="kids" >
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery1} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery2} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery3} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery4} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="tab-pane fade" id="poloshirt" >
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery2} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery4} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery3} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={gallery1} alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="recommended_items">
              <h2 className="title text-center">recommended items</h2>
              
              <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="item active">	
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={recommend1} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={recommend2} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={recommend3} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">	
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={recommend1} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={recommend2} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={recommend3} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>			
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companyinfo">
                <h2><span>Quick</span>store</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src={frame1} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src={frame2} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src={frame3} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src={frame4} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="address">
                <img src={map} alt="" />
                <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Service</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#">Online Help</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Order Status</a></li>
                  <li><a href="#">Change Location</a></li>
                  <li><a href="#">FAQ’s</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Quick Shop</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#">T-Shirt</a></li>
                  <li><a href="#">Mens</a></li>
                  <li><a href="#">Womens</a></li>
                  <li><a href="#">Gift Cards</a></li>
                  <li><a href="#">Shoes</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Policies</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privecy Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                  <li><a href="#">Billing System</a></li>
                  <li><a href="#">Ticket System</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>About Quickstore</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#">Company Information</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Store Location</a></li>
                  <li><a href="#">Affillate Program</a></li>
                  <li><a href="#">Copyright</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <div className="single-widget">
                <h2> Message Us</h2>
                <form action="#" className="searchform">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
                  <p>Get the most recent updates from <br />our site and be updated your self...</p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">Copyright © 2018 Quickstore Inc. All rights reserved.</p>
            <p className="pull-right">Designed by <span><a target="_blank" href="#">Daniel Jack</a></span></p>
          </div>
        </div>
      </div>  
    </footer>
  </div>
    );
  }
}