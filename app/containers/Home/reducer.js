/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, LOAD_PRODUCTS_SUCCEEDED } from './constants';

export const initialState = fromJS({});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_PRODUCTS_SUCCEEDED:
      return state.set('products', action.products);
    default:
      return state;
  }
}

export default homeReducer;
