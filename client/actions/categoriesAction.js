import categoriesApi from '../api/categoriesApi';
import * as types from './types/index';

export function loadCategories() {  
  return function(dispatch) {
    return categoriesApi.getAllCategories()
    .then(categories => {
      console.log('===CATEGORY ACTION=\n\n', categories, '\n\n=====')
      dispatch(loadCategoriesSuccess(categories));
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function loadCategoriesSuccess(categories) {  
  return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}