import React, { Suspense, useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import useAxios from '../Axios/useAxios';
import Loader from '../Loading/Loader';
import Gallery from '../components/Gallery';

import Newsletter from '../components/Newsletter';

  const feature= fetch('/feature.json').then( res =>res.json())

const Home = () => {
  
  
 

 
  
 
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <section className="main">
        <div className="text-center mb-[25px]">
          <h2 className="title liner-text">
            Features That Drive Social Impact
          </h2>
        </div>
        <div>
          <Suspense fallback={<Loader></Loader>}>
            <Feature feature={feature}></Feature>
          </Suspense>
        </div>
      </section>

      <section className="main">
        <div className="text-center mb-[25px]">
          <h2 className="title liner-text">Our Event Highlights</h2>
        </div>
        <div>
          <Gallery></Gallery>
        </div>
      </section>

      <section className="md:max-w-[600px] mx-auto w-full my-[50px] p-2">
        <div className="mb-[25px] text-center">
          <h2 className="title liner-text">Subscribe for Event Updates</h2>
        </div>
        <div className=" w-full">
          <Newsletter></Newsletter>
        </div>
      </section>
    </div>
  );
};

export default Home;