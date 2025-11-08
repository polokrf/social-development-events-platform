import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
  return (
    <div className='flex flex-col  justify-center min-h-screen'>
      <div>
        <Header></Header>
      </div>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;