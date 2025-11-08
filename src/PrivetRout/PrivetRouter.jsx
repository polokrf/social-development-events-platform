import React from 'react';
import useAuth from '../Axios/useAuth';
import { Navigate } from 'react-router';

import Loader from '../Loading/Loader';

const PrivetRouter = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
   return <Loader></Loader>
  }

  if (user) {
    return children
  }
  return <Navigate to='/login'></Navigate>
};

export default PrivetRouter;