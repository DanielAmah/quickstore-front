import React from 'react';

import product1 from "../../../../images/home/product1.jpg";
import product2 from "../../../../images/home/product2.jpg";
import product3 from "../../../../images/home/product3.jpg";
import product4 from "../../../../images/home/product4.jpg";
import product5 from "../../../../images/home/product5.jpg";
import product6 from "../../../../images/home/product6.jpg";
import new_ from "../../../../images/home/new.png";
import sale from "../../../../images/home/sale.png";
import gallery1 from "../../../../images/home/gallery1.jpg";
import gallery2 from "../../../../images/home/gallery2.jpg";
import gallery3 from "../../../../images/home/gallery3.jpg";
import gallery4 from "../../../../images/home/gallery4.jpg";

export default class FeatureItems extends React.Component {
  render(){
    return (
      <div>
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
    </div>
    
    );
  }
}


