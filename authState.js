'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // Check for stored auth user in local storage
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user) => {
    setAuthUser(user);
    localStorage.setItem('authUser', JSON.stringify(user));
  };

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
