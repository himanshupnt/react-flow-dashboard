// @flow
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import broken from '../assets/broken-link.png';

const styles = (theme: Object) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
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

const NotFound = (props: ProvidedProps): React.Element<'div'> => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img className={classes.img} src={broken} alt="Broken Link" />
      <Typography variant="display1">Ugh, that's a broken link!</Typography>
      <Typography variant="subheading">
        May be try uplinking with the right satellite.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(NotFound);
