import React from 'react';
import { UserProvider } from './src/context';
import Navigator from './src/nav';
import FlashMessageComponent from './src/components/flashMessage';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => (
  <UserProvider>
    <Navigator />
    <FlashMessageComponent />
  </UserProvider>
);

export default App;
