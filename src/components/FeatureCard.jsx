import React from 'react';
import { Link } from 'react-router';

const FeatureCard = ({card}) => {
  return (
    <div className=" h-full card-body shadow-sm rounded-xl  my-[25px]  shadow-blue-200">
      <img
        src={card?.image}
        alt=""
        className="w-[100px] h-[100px] rounded-full object-cover object-top mx-auto "
      />

      <div className=' text-center'>
        <h3  className="  font-bold capitalize mb-2">{card?.title}</h3>
        <p className=" font-semibold text-gray-600 text-xs">
          {card?.description}
        </p>
      </div>
      
    </div>
  );
};

export default FeatureCard;