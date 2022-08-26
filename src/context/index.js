import React, { useState } from 'react';

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
  };

  const logout = () => {
    setUser(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
