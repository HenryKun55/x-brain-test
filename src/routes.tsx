import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './pages/Products';
import Purchased from './pages/Purchased';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route path="/purchased" component={Purchased} />
  </Switch>
);

export default Routes;
