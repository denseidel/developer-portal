// import { take, call, put, select } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_SUCCEEDED,
  LOGIN,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCEEDED,
} from './constants';

function* handleLogin() {
  // use the keycloak function to redirect and login
  // https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter
  // https://www.npmjs.com/package/keycloak-js
  yield put({ type: LOGIN_SUCCEEDED });
  // keycloak.init({ onLoad: 'check-sso', checkLoginIframeInterval: 1 }).success(authenticated => {
  //   if (keycloak.authenticated) {
  //     sessionStorage.setItem('kctoken', keycloak.token);

  //     //Updating some value in store to re-render the component
  //     put({ type: LOGIN_SUCCEEDED, keycloak: keycloak });

  //     setInterval(() => {
  //       keycloak.updateToken(10).error(() => keycloak.logout());
  //       sessionStorage.setItem('kctoken', keycloak.token);
  //     }, 10000);
  //     } else {
  //       keycloak.login();
  //     }
  // });
}

function* handleLoadProducts() {
  const mock = [
    {
      name: 'Product Info',
      type: 'services',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
    {
      name: 'Identity Access Management',
      type: 'platform',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
    {
      name: 'API Runtime',
      type: 'platform',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
    {
      name: 'API Management',
      type: 'platform',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
    {
      name: 'AI Development',
      type: 'platform',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
    {
      name: 'Risk Asessment',
      type: 'services',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
    {
      name: 'Adress Check',
      type: 'services',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
    {
      name: 'Investment',
      type: 'services',
      description: 'babba bla bla bla',
      links: {
        landing: 'http://api.d10l.de',
        production: '',
        sandbox: '',
        documentation: '',
      },
    },
  ];

  yield put({ type: LOAD_PRODUCTS_SUCCEEDED, products: mock });
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchHome() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN, handleLogin);
  yield takeLatest(LOAD_PRODUCTS, handleLoadProducts);
}
