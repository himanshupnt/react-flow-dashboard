// @flow
import type { ComponentType } from 'react';

import System from '../components/System';
import Dashboard from '../containers/Dashboard';

type _Route = {
  path: string,
  component: ComponentType<Object>,
  key: string,
  exact: boolean,
};

const homeRoutes: Array<_Route> = [
  { path: '/home/dashboard', component: Dashboard, key: 'dash1', exact: true },
  { path: '/home/system', component: System, key: 'sys1', exact: true },
];

export default homeRoutes;
