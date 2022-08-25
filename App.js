import React from 'react';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import Navigator from './src/nav';

const App = () => <Navigator />;

export default App;
