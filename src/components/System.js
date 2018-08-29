// @flow
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: Object) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
});

type Styles = {
  root: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {};

const System = (props: ProvidedProps & Props): React.Element<'div'> => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display1">System!</Typography>
    </div>
  );
};

export default withStyles(styles)(System);
