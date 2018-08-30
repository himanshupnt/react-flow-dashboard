// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

type Styles = {
  root: string,
  formControl: string,
  selectEmpty: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {
  sortBy: string,
  handleChange: () => void,
};

const SelectionCtrl = (props: ProvidedProps & Props) => {
  const { classes, sortBy, handleChange } = props;

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sort-menu">Sort By</InputLabel>
        <Select
          value={sortBy}
          onChange={handleChange}
          inputProps={{
            name: 'sortBy',
            id: 'sort-menu',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="status">Status</MenuItem>
          <MenuItem value="lastUpdated">Last updated</MenuItem>
          <MenuItem value="error">Error</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default withStyles(styles)(SelectionCtrl);
