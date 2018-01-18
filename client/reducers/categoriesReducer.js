import * as types from '../actions/types/index';
import initialState from './initialState';

export default function categoriesReducer(state = [], action) {  
  switch(action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
        console.log('====reducer =====\n', action.categories)
      return action.categories.map(category => ({
        ...state,
        id: category.id,
        name: category.name,
        description: category.description
      }));
    default:
      return state;
      
  }
}