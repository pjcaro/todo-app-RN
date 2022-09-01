import React from 'react';
import { UserProvider } from './src/context';
import { Provider } from 'react-redux';
import Navigator from './src/nav';
import FlashMessageComponent from './src/components/flashMessage';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <UserProvider>
      <Navigator />
      <FlashMessageComponent />
    </UserProvider>
  </Provider>
);

export default App;
