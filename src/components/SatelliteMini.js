import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },

  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const SatelliteMini = props => {
  const { classes, satelliteId, barrels } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Satellite - {satelliteId}
        </Typography>
        <Typography variant="headline" component="h2">
          Total Barrels Attached - {barrels.length}
        </Typography>
        {barrels.map(barrel => {
          return (
            <Typography>
              Batch {barrel.batch_id} Status: {barrel.status}
            </Typography>
          );
        })}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(SatelliteMini);
