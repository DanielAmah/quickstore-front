import React from 'react';

import Categories from "./categories/Categories.jsx";
import Brands from "./brands/Brands.jsx";
import PriceRange from "./price-range/PriceRange.jsx";
import SideAds from "./side-ads/SideAds.jsx";

export default class Sidebar extends React.Component {
  render(){
    return (
      <div className="col-sm-3">
      <div className="left-sidebar">

        <Categories />
        <Brands />
        <PriceRange />
        <SideAds />
       
      </div>
    </div>
    );
  }
}