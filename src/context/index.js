import React, { useState } from 'react';
import { showFlashMessage } from '../components/flashMessage';
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
    LocalStorage.setItem('token', token);
    showFlashMessage({
      message: t('alerts.login'),
      type: 'success',
    });
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
