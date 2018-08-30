// @flow
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import SatelliteMini from '../components/SatelliteMini';
import getSatellites from '../services/getSatellites';
import Loader from '../components/Loader';
import BarrelCard from '../components/BarrelCard';
import SelectionCtrl from '../components/SelectionCtrl';

const styles = theme => ({
  root: {
    width: '100%',
  },
  sat: {
    margin: 10,
  },
  gridRoot: {
    margin: 20,
    flexGrow: 1,
  },
  sort: {
    margin: 15,
  },
});

type Styles = {
  root: string,
  sat: string,
  gridRoot: string,
  sort: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {};

type Barrel = {
  _errors: Array<string>,
  batch_id: number,
  last_flavor_sensor_result: string,
  status: string,
};

type Satellite = {
  current_telemetry_timestamp: number,
  prev_telemetry_timestamp: number,
  satellite_id: number,
  barrels: Array<Barrel>,
};

type State = {
  satellites: Array<Satellite>,
  isLoading: boolean,
  showBarrels: boolean,
  activeSatelliteId: number,
  sortedBarrels: Array<Barrel>,
  sortBy: string,
};

class Dashboard extends React.Component<ProvidedProps & Props, State> {
  state = {
    satellites: [],
    isLoading: true,
    showBarrels: false,
    activeSatelliteId: -1,
    sortedBarrels: [],
    sortBy: '',
  };

  async componentDidMount() {
    try {
      const items = await getSatellites();
      this.setState({
        satellites: items,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ isLoading: false });
      alert(error.message);
    }
  }

  clickHandler = satelliteId => {
    const sortedBarrels = getBarrels(this.state.satellites, satelliteId);
    this.setState({
      activeSatelliteId: satelliteId,
      showBarrels: true,
      sortedBarrels,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    const sortedBarrels = getSortedBarrels(
      this.state.sortedBarrels,
      event.target.value
    );
    this.setState({
      sortedBarrels,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      satellites,
      isLoading,
      showBarrels,
      sortedBarrels,
      sortBy,
    } = this.state;

    if (isLoading) {
      return (
        <div className={classes.root}>
          <Loader message="Fetching Satellites data.." />
        </div>
      );
    }
    if (!satellites.length && !isLoading) {
      return (
        <div className={classes.root}>
          <Typography> No Active Satellites found for your account.</Typography>
        </div>
      );
    }

    if (!!satellites.length && !isLoading && !showBarrels) {
      return (
        <div className={classes.root}>
          <Grid
            container
            className={classes.gridRoot}
            spacing={24}
            direction="row"
          >
            {satellites.map((sat: Satellite) => {
              return (
                <Grid item xs={6} key={sat.satellite_id}>
                  <SatelliteMini
                    className={classes.sat}
                    satelliteId={sat.satellite_id}
                    barrels={sat.barrels}
                    clickHandler={this.clickHandler}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    }

    if (showBarrels) {
      return (
        <div className={classes.root}>
          <div className={classes.sort}>
            <SelectionCtrl sortBy={sortBy} handleChange={this.handleChange} />
          </div>
          <Divider />
          <Grid
            container
            className={classes.gridRoot}
            spacing={24}
            direction="row"
          >
            {sortedBarrels.map((barrel: Barrel) => {
              return (
                <Grid item xs={4} key={barrel.batch_id}>
                  <BarrelCard className={classes.sat} barrel={barrel} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    }
  }
}

const getBarrels = (
  satellites: Array<Satellite>,
  id: number
): Array<Barrel> => {
  return satellites.filter((sat: Satellite) => {
    return sat.satellite_id === id;
  })[0].barrels;
};

const getSortedBarrels = (
  barrels: Array<Barrel>,
  sortBy: string
): Array<Barrel> => {
  let sorted = [];
  if (sortBy === 'status') {
    sorted = barrels.sort(
      (a: Barrel, b: Barrel): number => {
        const statusA = a.status.toLowerCase();
        const statusB = b.status.toLowerCase();
        if (statusA < statusB) {
          return -1;
        }
        if (statusA > statusB) {
          return 1;
        }
        return 0;
      }
    );
  }

  if (sortBy === '') {
    sorted = barrels.map(b => b);
  }
  return sorted;
};
export default withStyles(styles)(Dashboard);
