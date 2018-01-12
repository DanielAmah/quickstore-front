import React from 'react';

import frame1 from "../../../images/home/iframe1.png";
import frame2 from "../../../images/home/iframe2.png";
import frame3 from "../../../images/home/iframe3.png";
import frame4 from "../../../images/home/iframe4.png";
import map from "../../../images/home/map.png";

export default class FooterTop extends React.Component {
  render() {
    return(
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
    )
  }
}
