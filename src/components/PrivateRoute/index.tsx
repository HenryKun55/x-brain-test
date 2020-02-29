/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';

import isAuth from '../../services/auth';

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => (isAuth() ? (
        <Component {...routeProps} />
      ) : (
        <Redirect
          to="/"
        />
      ))}
    />
  );
};

export default PrivateRoute;
