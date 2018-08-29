// @flow
import type { ComponentType } from 'react';

import FileUploader from '../components/FileUploader';
import DashboardLayout from '../layouts/DashboardLayout';
import NotFound from '../components/NotFound';

type _Route = {
  path: string,
  component: ComponentType<Object>,
  exact: boolean,
  key: string,
};

const indexRoutes: Array<_Route> = [
  { path: '/upload', component: FileUploader, exact: true, key: 'uploadRt' },
  { path: '/404', component: NotFound, exact: true, key: '404Rt' },
  { path: '/home', component: DashboardLayout, exact: false, key: 'homeRt' },
];

export default indexRoutes;
