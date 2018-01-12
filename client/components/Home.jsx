import React from 'react';

import Header from './home/header/Header.jsx';
import Slider from './home/slider/Slider.jsx';
import MainContent from './home/main-content/MainContent.jsx';
import Footer from './home/footer/Footer.jsx';

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