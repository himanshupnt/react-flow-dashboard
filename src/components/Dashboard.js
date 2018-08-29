// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

// import SatelliteMini from './SatelliteMini';
import getSatellites from '../services/getSatellites';

const styles = theme => ({
  root: {
    width: '100%',
  },
});

type Styles = {
  root: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {};

type State = {};

class Dashboard extends Component<ProvidedProps & Props, State> {
  state = {
    satellites: [],
  };
  async componentDidMount() {
    const items = await getSatellites();
  }
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>Hello I am Dashboard!</div>;
  }
}

export default withStyles(styles)(Dashboard);
