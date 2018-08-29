// @flow
import * as React from 'react';
import Routes from './Routes';
import withTheme from './hoc/withTheme';

type Props = {
  title: string,
};

class App extends React.Component<Props> {
  render(): React.Node {
    return <Routes />;
  }
}

export default withTheme(App);
