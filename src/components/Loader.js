// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    maxWidth: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

type Styles = {
  root: string,
  progress: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {
  message: string,
};

const Loader = (props: ProvidedProps & Props) => {
  const { classes, message } = props;
  return (
    <div className={classes.root}>
      <Typography variant="subheading">{message}</Typography>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  );
};

export default withStyles(styles)(Loader);
