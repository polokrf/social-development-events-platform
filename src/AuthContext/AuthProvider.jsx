import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Auth/firebase.init';


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading,setLoading] =useState(true)

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const updateUser = (person) => {
    return updateProfile(auth.currentUser,person)
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      
      setUser(currentUser);
      setLoading(false)
    })
    
    return () => unsubscribe();
   }, [])

  const logOut = () => {
    return signOut(auth)
  }
  
  
  const person = {
    register,
    updateUser,
    login,
    googleLogin,
    logOut,
    user,
    loading,
    setUser


  }
  return (
    <AuthContext value={person}>
      {children}
   </AuthContext>
  );
};

export default AuthProvider;