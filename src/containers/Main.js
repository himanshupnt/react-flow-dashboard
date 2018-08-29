import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import homeRoutes from '../routes/homeRoutes';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
});

const Main = props => {
  const { classes, location } = props;
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        {location.pathname === '/home' ? (
          <Home />
        ) : (
          <Switch>
            {homeRoutes.map(r => {
              return (
                <Route
                  key={r.key}
                  path={r.path}
                  exact={r.exact}
                  component={r.component}
                />
              );
            })}
            <Redirect from="/home/:invalidUrl" to="/404" />
          </Switch>
        )}
      </main>
    </div>
  );
};

export default withStyles(styles)(Main);
