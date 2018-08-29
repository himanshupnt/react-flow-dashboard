import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// $FlowFixMe
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.png';

const drawerWidth = 200;

const styles = theme => ({
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    backgroundColor: '#37474f',
    // [theme.breakpoints.up('md')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
    [theme.breakpoints.up('md')]: {
      zIndex: 10000,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  img: {
    maxWidth: 100,
    marginRight: 100,
  },
});

const Header = props => {
  const { classes, handleDrawerToggle } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <img className={classes.img} src={logo} alt="logo" />
        <Typography variant="title" color="inherit" noWrap>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles)(Header);
