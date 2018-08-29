// @flow
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import type { Location } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Main from '../containers/Main';

const styles = (theme: Object) => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 8,
    height: '100vh',
    backgroundColor: '#263238',
  },
  img: {
    maxWidth: 180,
  },
});

type Styles = {
  root: string,
  img: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {
  location: Location,
};

const DashboardLayout = (
  props: ProvidedProps & Props
): React.Element<'div'> => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Sidebar />
      <Main location={props.location} />
    </div>
  );
};

export default withStyles(styles)(DashboardLayout);
