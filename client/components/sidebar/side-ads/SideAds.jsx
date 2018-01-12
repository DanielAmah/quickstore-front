import React from 'react';

import shipping from "../../../images/home/shipping.jpg";

export default class SideAds extends React.Component {
  render(){
    return (
      <div className="shipping text-center">
      <img src={shipping} alt="" />
      </div>
    )
  }
}
