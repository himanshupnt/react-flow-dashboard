// @flow
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import SidebarNav from '../components/SidebarNav';
import Header from '../components/Header';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    width: drawerWidth,
  },

  drawerPaper: {
    height: '100vh',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    backgroundColor: '#37474f',
  },
});

type Styles = {
  root: string,
  drawerPaper: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {};

type State = {
  mobileOpen: boolean,
  selected: string,
};

class Sidebar extends Component<ProvidedProps & Props, State> {
  state = {
    mobileOpen: false,
    selected: '',
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleClick = value => {
    this.setState({
      selected: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { selected } = this.state;
    return (
      <div>
        <Header handleDrawerToggle={this.handleDrawerToggle} />
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidebarNav selected={selected} handleClick={this.handleClick} />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <SidebarNav selected={selected} handleClick={this.handleClick} />
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
