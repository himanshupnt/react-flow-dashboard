// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// $FlowFixMe
import DashboardIcon from '@material-ui/icons/Dashboard';
// $FlowFixMe
import LayersIcon from '@material-ui/icons/Layers';

const styles = theme => ({
  link: {
    textDecoration: 'none',
  },
});

type Styles = {
  link: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {
  handleClick: (value: string) => void,
  selected: string,
};

const SidebarNav = (props: ProvidedProps & Props) => {
  const { classes, handleClick, selected } = props;
  console.log(props);
  return (
    <div>
      <ListItem
        selected={selected === 'dashboard'}
        button
        onClick={event => handleClick('dashboard')}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link className={classes.link} to="/home/dashboard">
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItem>
      <ListItem
        selected={selected === 'system'}
        button
        onClick={event => handleClick('system')}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <Link className={classes.link} to="/home/system">
          <ListItemText primary="System" />
        </Link>
      </ListItem>
    </div>
  );
};

export default withStyles(styles)(SidebarNav);
