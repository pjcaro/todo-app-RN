import React, { useState } from 'react';
import { showFlashMessage } from '../components/flashMessage';
import { setTokenAuthentication } from '../services/api';
import LocalStorage from '../services/localStorage';
import t from '../services/translate';

const auth = {
  user: undefined,
  isLoggedIn: false,
  token: '',
};

export const AuthContext = React.createContext(auth);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(auth);

  const login = ({ user, token }) => {
    setUser({
      user,
      isLoggedIn: true,
      token,
    });
    setTokenAuthentication(token);
    LocalStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(auth);
    LocalStorage.removeItem('token')
    showFlashMessage({
      message: t('alerts.logout'),
      type: 'info',
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
