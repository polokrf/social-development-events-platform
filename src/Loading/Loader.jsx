import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center my-[50px] ">
      <RingLoader color="green" />
    </div>
  );
};

export default Loader;