import React, { Suspense, useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import useAxios from '../Axios/useAxios';
import Loader from '../Loading/Loader';
import Gallery from '../components/Gallery';

import Newsletter from '../components/Newsletter';
import FeatureSkeleton from '../Loading/Skeleton/FeatureSkeleton';
import FedBack from '../components/Fedback';

  const feature= fetch('/feature.json').then( res =>res.json())
  const fedBack= fetch('/fedback.json').then( res =>res.json())

const Home = () => {
  
  
 

 
  
 
  return (
    <div className="overflow-hidden">
      <header className="w-full">
        <Banner></Banner>
      </header>

      <section className="main">
        <div className="text-center mb-[25px]">
          <h2 className=" text-2xl font-bold liner-text">
            Features That Drive Social Impact
          </h2>
        </div>
        <div className=" h-full">
          <Suspense fallback={<FeatureSkeleton></FeatureSkeleton>}>
            <Feature feature={feature}></Feature>
          </Suspense>
        </div>
      </section>

      <section className="main">
        <div className="text-center mb-[25px]">
          <h2 className="text-2xl font-bold liner-text">
            Our Event Highlights
          </h2>
        </div>
        <div>
          <Gallery></Gallery>
        </div>
      </section>

      {/* What People Say fedBack */}

      <section className="main">
        <div className="text-center mb-[25px]">
          <h2 className=" text-2xl font-bold liner-text">What People Say</h2>
        </div>
        <div>
          <Suspense fallback={<Loader></Loader>}>
            <FedBack fedBack={fedBack}></FedBack>
          </Suspense>
        </div>
      </section>

      <section className="md:max-w-[600px] mx-auto w-full my-[50px] p-2">
      
        <div className=" w-full">
          <Newsletter></Newsletter>
        </div>
      </section>
    </div>
  );
};

export default Home;