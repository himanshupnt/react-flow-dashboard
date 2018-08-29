// @flow
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

import uploadFile from '../services/uploadFile';
import createRandomStr from '../constants/randomString';

const styles = (theme: Object) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  button: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    maxWidth: 100,
    [theme.breakpoints.up('md')]: {
      marginLeft: 30,
      marginRight: 0,
      marginTop: 0,
      display: 'inline',
    },
  },
  inputLabel: {
    display: 'none',
  },
  form: {
    marginTop: 30,
    marginBottom: 30,
  },
  formCtrl: {
    margin: 10,
  },
  progress: {
    maxWidth: 300,
    margin: 'auto',
  },
});

type Styles = {
  root: string,
  button: string,
  rightIcon: string,
  inputLabel: string,
  form: string,
  formCtrl: string,
  progress: string,
};

type ProvidedProps = {
  classes: Styles,
};

type Props = {};

type State = {
  selectedFile: Blob,
  selectedFileName: string,
  canUpload: boolean,
  inputKey: string,
  completed: number,
  showProgress: boolean,
};

const defaultFile = new Blob([{ name: 'default upload' }], {
  type: 'application/json',
});

class FileUploader extends Component<ProvidedProps & Props, State> {
  state = {
    selectedFile: defaultFile,
    selectedFileName: '',
    canUpload: false,
    inputKey: '',
    completed: 0,
    showProgress: false,
  };

  fileChangedHandler = event => {
    if (event.target.files[0]) {
      this.setState({
        selectedFile: event.target.files[0],
        selectedFileName: event.target.files[0].name,
        canUpload: true,
      });
    }
  };

  uploadHandler = async event => {
    event.preventDefault();
    const formData = new FormData();

    formData.append(
      'fileToUpload',
      this.state.selectedFile,
      this.state.selectedFileName
    );

    this.setState({
      canUpload: false,
      showProgress: true,
    });

    try {
      const response = await uploadFile(formData, this.progressHandler);
      console.log(response);
    } catch (error) {
      alert(error);
    }

    this.setState({
      selectedFile: defaultFile,
      selectedFileName: '',
      inputKey: createRandomStr(),
      completed: 0,
      showProgress: false,
    });
  };

  progressHandler = progressEvent => {
    const progress = (progressEvent.loaded / progressEvent.total) * 100;
    this.setState({
      completed: progress,
    });
  };

  render() {
    const { classes } = this.props;
    const { canUpload, inputKey, completed, showProgress } = this.state;
    const uploadedPercent: string = completed.toFixed(2);

    return (
      <div className={classes.root}>
        <Typography variant="subheading">
          Please upload JSON data files here.
        </Typography>
        <form
          noValidate
          autoComplete="off"
          encType="multipart/form-data"
          className={classes.form}
          onSubmit={this.uploadHandler}
        >
          <FormControl className={classes.formCtrl}>
            <InputLabel className={classes.inputLabel} htmlFor="upload-json">
              Choose File
            </InputLabel>
            <Input
              key={inputKey}
              onChange={this.fileChangedHandler}
              accept=".json"
              id="upload-json"
              type="file"
              multiple
            />
          </FormControl>
          <Button
            disabled={!canUpload}
            variant="outlined"
            className={classes.button}
            type="submit"
          >
            Upload
          </Button>
        </form>
        {showProgress && (
          <div className={classes.progress}>
            <Typography>Uploading - {uploadedPercent}% completed</Typography>
            <LinearProgress
              variant="determinate"
              value={this.state.completed}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(FileUploader);
