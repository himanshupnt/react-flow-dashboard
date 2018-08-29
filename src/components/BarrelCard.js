// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
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
  barrel: Barrel,
};

const BarrelCard = (props: ProvidedProps & Props) => {
  const { classes, barrel } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="title" color="textSecondary">
          Batch ID - {barrel.batch_id}
        </Typography>
        <Divider />
        <Typography variant="body2">
          Last Flavor - {barrel.last_flavor_sensor_result}
        </Typography>
        <Typography variant="body2">
          Current Status - {barrel.status}
        </Typography>
        <Typography variant="body2">
          Current Errors - {barrel._errors}
        </Typography>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default withStyles(styles)(BarrelCard);
