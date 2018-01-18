import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CategoriesAction from '../../../../actions/categoriesAction';
import CategoriesList from './CategoriesList.jsx';
class Categories extends React.Component {
  constructor(props) {
    super(props);	
  }	
  render() {
    console.log(this.props, 'cats');
    return (
      <div>
      <h2>Category</h2>
      <div className="panel-group category-products" id="accordian">
      <CategoriesList categories = {this.props.categories} />
      </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('==== state ====', state)
  return {
    categories: state.categoriesReducer
  };
} 

// Categories.propTypes = {  
//   categories: PropTypes.array.isRequired
// };

export default connect(mapStateToProps)(Categories);  
