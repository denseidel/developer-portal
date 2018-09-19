import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

/**
 * Other specific selectors
 */
// const selectProducts = state => state.get('home', initialState);
const selectProducts = state => state.getIn(['home', 'products'], initialState);
/**
 * Default selector used by Home
 */
const makeSelectServices = () =>
  createSelector(selectProducts, products =>
    products.filter(product => product.type === 'services'),
  );

const makeSelectPlatform = () =>
  createSelector(selectProducts, products =>
    products.filter(product => product.type === 'platform'),
  );

export { makeSelectPlatform, makeSelectServices, selectProducts };
