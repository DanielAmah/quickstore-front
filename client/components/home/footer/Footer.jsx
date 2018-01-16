import React from 'react';
import FooterTop from "./footer-top/FooterTop.jsx";
import FooterWidget from "./footer-widget/FooterWidget.jsx";
import FooterBottom from "./footer-bottom/FooterBottom.jsx";

export default class Footer extends React.Component {
  render(){
    return (
      <footer id="footer">
      <FooterTop />
      <FooterWidget />
      <FooterBottom />
    
    </footer>
    );

}
}