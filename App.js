import React from 'react';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const auth = {
  user: undefined,
  isLoggedIn: false,
  token: '',
};

export const AuthContext = React.createContext(auth);

import Navigator from './src/nav';

const App = () => (
  <AuthContext.Provider value={auth}>
    <Navigator />
  </AuthContext.Provider>
);

export default App;
