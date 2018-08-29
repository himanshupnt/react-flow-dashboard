// @flow

import axios from 'axios';
import type { AxiosPromise } from 'axios';

import apiBase from '../config/apiBase';

type Data = {
  success: string,
};

const url = `${apiBase}/upload`;

const uploadFile = async (
  file: Object,
  callback: (progressEvent: ProgressEvent) => void
): AxiosPromise<Data> => {
  try {
    const data = await axios.post(url, file, {
      onUploadProgress: callback,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default uploadFile;
