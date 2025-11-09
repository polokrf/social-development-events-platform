import React from 'react';

const Feature = ({ feature }) => {
  return (
    <div>
      <div
        data-aos="fade-down"
        className="h-full   bg-base-100 shadow-sm gap-4 p-3 rounded-2xl my-5 mx-3  "
      >
        <div>
          <img
            className=" w-full h-[300px] mb-4  rounded-2xl "
            src={feature.image}
            alt="feature"
          />
        </div>

        <div className="">
          <h2 className="card-title mb-2 shadow-black inline-block ">
            {feature.title}
          </h2>
          <p>{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;