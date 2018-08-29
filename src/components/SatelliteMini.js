// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const styles = {
  gridRoot: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
    maxWidth: 450,
  },

  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

type Styles = {
  card: string,
  title: string,
  pos: string,
  gridRoot: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Barrel = {
  _errors: Array<string>,
  batch_id: number,
  last_flavor_sensor_result: string,
  status: string,
};

type Props = {
  satelliteId: number,
  barrels: Array<Barrel>,
  clickHandler: (satelliteId: number) => void,
};

const SatelliteMini = (props: ProvidedProps & Props) => {
  const { classes, satelliteId, barrels, clickHandler } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid
          container
          className={classes.gridRoot}
          spacing={24}
          direction="row"
        >
          <Grid item xs={12}>
            <Typography variant="title" color="textSecondary">
              Satellite - {satelliteId}
            </Typography>
            <Divider />
            <Typography variant="body2">
              Total Barrels Attached - {barrels.length}
            </Typography>
          </Grid>
        </Grid>

        {barrels.map(barrel => {
          return (
            <Grid item xs={6} key={barrel.batch_id}>
              <Typography>
                Batch {barrel.batch_id} Status: {barrel.status}
              </Typography>
            </Grid>
          );
        })}
      </CardContent>
      <Divider />
      <CardActions>
        <Button onClick={() => clickHandler(satelliteId)} size="small">
          View Barrels
        </Button>
        <Button size="small" color="secondary">
          Trigger Deorbit Burn
        </Button>
        <Button size="small" color="secondary">
          Detonate
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(SatelliteMini);
