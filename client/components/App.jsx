import React from 'react';
import Header from './header/Header.jsx';
import Slider from './slider/Slider.jsx';
import Footer from './footer/Footer.jsx';
import MainContent from './main-content/MainContent.jsx';

import '../css/price-range.css';
import '../css/animate.css';
import '../css/main.css';
import '../css/responsive.css';
require('../js/price-range.js');
require('../js/main.js');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <MainContent />
        <Footer />
      </div>
    );
  }
}