import React from 'react';
import { Router, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import PrivateRoute from './components/PrivateRoute';


import Products from './pages/Products';
import Purchased from './pages/Purchased';

export const history = createBrowserHistory();

const Routes: React.FC = () => (
  <Router history={history}>
    <Route exact path="/" component={Products} />
    <PrivateRoute path="/purchased" component={Purchased} />
  </Router>
);

export default Routes;
