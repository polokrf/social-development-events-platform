import React from 'react';
import useAuth from '../Axios/useAuth';
import { Navigate, useLocation } from 'react-router';

import Loader from '../Loading/Loader';

const PrivetRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()
  
  if (loading) {
   return <Loader></Loader>
  }

  if (user) {
    return children
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRouter;