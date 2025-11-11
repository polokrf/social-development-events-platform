import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Root = () => {
  return (
    <div className="flex flex-col  justify-center min-h-screen   bg-linear-to-l   from-sky-100  to-purple-100">
      <div>
        <Header></Header>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;