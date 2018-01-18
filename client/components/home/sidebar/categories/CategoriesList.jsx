import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CategoriesList = ({categories}) => {  
  return (
        <div>
        {categories.map(categories => 
          <div key={categories.id} className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link to={`#`}>
                  {categories.name}
                </Link>
              </h4>
            </div>
          </div>
        )}
      </div>
  );
};

export default CategoriesList; 

// <div className="panel panel-default">
// <div className="panel-heading">
//   <h4 className="panel-title"><a href="#">Kids</a></h4>
// </div>
// </div>
// <div className="panel panel-default">
// <div className="panel-heading">
//   <h4 className="panel-title"><a href="#">Fashion</a></h4>
// </div>
// </div>
// <div className="panel panel-default">
// <div className="panel-heading">
//   <h4 className="panel-title"><a href="#">Households</a></h4>
// </div>
// </div>
// <div className="panel panel-default">
// <div className="panel-heading">
//   <h4 className="panel-title"><a href="#">Interiors</a></h4>
// </div>
// </div>
// <div className="panel panel-default">
// <div className="panel-heading">
//   <h4 className="panel-title"><a href="#">Clothing</a></h4>
// </div>
// </div>
// <div className="panel panel-default">
// <div className="panel-heading">
//   <h4 className="panel-title"><a href="#">Bags</a></h4>
// </div>
// </div>
// <div className="panel panel-default">
// <div className="panel-heading">
//   <h4 className="panel-title"><a href="#">Shoes</a></h4>
// </div>
// </div>