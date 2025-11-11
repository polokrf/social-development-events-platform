import React from 'react';
import { Link } from 'react-router';

const FeatureCard = ({card}) => {
  return (
    <div className="m-2 group px-10 py-5  rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 bg-white [&amp;_p]:delay-200 [&amp;_p]:transition-all">
      <img
        src={card?.image}
        alt=""
        className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto object-cover object-top"
      />

      <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
        {card?.title}
      </p>
      <p className="blueberry font-semibold text-gray-600 text-xs">
        {card?.description}
      </p>
      <div className="ordernow flex flex-row justify-between items-center w-full">
        
        
        <Link className="btn4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 dow-[10px_10px_150px_#ff9f0d] text-white group-hover:text-black cursor-pointer py-2 px-4 text-sm font-semibold rounded-full btn btn-success" to='/Register'>
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;