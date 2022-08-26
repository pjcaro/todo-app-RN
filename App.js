import React from 'react';
import { UserProvider } from './src/context';
import Navigator from './src/nav';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => (
  <UserProvider>
    <Navigator />
  </UserProvider>
);

export default App;
