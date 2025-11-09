import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import useAxios from '../Axios/useAxios';
import Loader from '../Loading/Loader';
import Gallery from '../components/Gallery';

import Newsletter from '../components/Newsletter';

const Home = () => {
  const featureData = useAxios();
  const [loading, setLoading] = useState(true);

  const [features,setFeatures]=useState([])

  useEffect(() => {
    featureData.get('/Feature')
      .then(data => {
        
        setFeatures(data.data)
        setLoading(false)
      }).catch(err => {
      console.log(err)
    })
  }, [featureData])
  
  
  if (loading) {
    return <Loader></Loader>
  }
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <section className="main">
        <div className="text-center mb-[25px]">
          <h2 className="title liner-text">Feature</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch">
          {features.map(feature => (
            <Feature key={feature._id} feature={feature}></Feature>
          ))}
        </div>
      </section>

      <section className="main">
        <div className="text-center mb-[25px]">
          <h2 className="title liner-text">Gallery</h2>
        </div>
        <div>
          <Gallery></Gallery>
        </div>
      </section>

      <section className="md:max-w-[600px] mx-auto w-full my-[50px] p-2">
        <div className="mb-[25px] text-center">
          <h2 className="title liner-text">Newsletter</h2>
        </div>
        <div className=" w-full">
          <Newsletter></Newsletter>
        </div>
      </section>
    </div>
  );
};

export default Home;