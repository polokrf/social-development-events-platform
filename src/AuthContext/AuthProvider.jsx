import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  
  const person = {
    
  }
  return (
    <AuthContext value={person}>
      {children}
   </AuthContext>
  );
};

export default AuthProvider;