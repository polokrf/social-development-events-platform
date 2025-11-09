import React from 'react';
import errorImg from '../assets/2704133.jpg'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Link } from 'react-router';

const Err = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-1 md:max-w-[600px] mx-auto w-full object-cover content-center">
        <img src={errorImg} alt="" />
        <div className='text-center'>
            <Link className="btn btn-outline btn-success " to="/">
          Back_Home
          </Link>
          </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Err;