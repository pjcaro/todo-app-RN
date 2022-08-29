import React, { useState } from 'react';
import LocalStorage from '../services/localStorage';

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
  };

  const logout = () => {
    setUser(auth);
    LocalStorage.removeItem('token')
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
