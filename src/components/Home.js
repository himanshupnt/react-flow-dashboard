import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    paddingTop: 30,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Welcome = () => {
  return (
    <Typography variant="title">
      Welcome to Satellite Control Center.
    </Typography>
  );
};

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Welcome />
    </div>
  );
};

export default withStyles(styles)(Home);
