import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import indexRoutes from './routes/index';
import NotFound from './components/NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {indexRoutes.map(route => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.key}
            />
          );
        })}
        <Redirect exact from="/" to="/home" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
