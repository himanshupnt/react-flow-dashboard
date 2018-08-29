// @flow

import axios from 'axios';
import type { AxiosPromise } from 'axios';

import apiBase from '../config/apiBase';

type Barrel = {
  _errors: Array<string>,
  batch_id: number,
  last_flavor_sensor_result: string,
  status: string,
};

type Satellite = {
  current_telemetry_timestamp: number,
  prev_telemetry_timestamp: number,
  satellite_id: number,
  barrels: Array<Barrel>,
};

const url = `${apiBase}/satellites`;

const getSatellites = async () => {
  try {
    const response = await axios.get(url);
    const data: Array<Satellite> = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getSatellites;
