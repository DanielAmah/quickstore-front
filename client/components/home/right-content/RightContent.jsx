import React from 'react';


import FeatureItems from "./feature-items/FeatureItems.jsx";
import RecommendedItems from "./recommended-items/RecommendedItems.jsx";

export default class RightContent extends React.Component {
render() {
  return (
    <div className="col-sm-9 padding-right">
    
    <FeatureItems />
    <RecommendedItems />
  </div>
  );
  }
}
