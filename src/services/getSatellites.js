// @flow

import axios from 'axios';
import type { AxiosPromise } from 'axios';

import apiBase from '../config/apiBase';

type Data = {
  success: string,
};

const url = `${apiBase}/satellites`;

const getSatellites = async (): AxiosPromise<Data> => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSatellites;
