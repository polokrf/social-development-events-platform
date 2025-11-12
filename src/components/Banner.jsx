import React from 'react';

import { Link } from 'react-router';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className="w-full bg-sky-100">
      <div className="hero  md:max-w-[700px] w-full md:py-[50px] py-[30px] mb-[45px] p-2 mx-auto">
        <div className="hero-content gap-4">
          

          <div data-aos="fade-up">
            <h1 className=" md:text-4xl text-3xl font-bold liner-text">
              <TypeAnimation
                sequence={[
                  ' Social Development Events Platform',

                  500,
                  'Social Development Events Platform',
                ]}
               
               repeat={Infinity}
              ></TypeAnimation>
            </h1>
            <p className="py-6 text-black">
              Social Development Events Platform (SDEP) connects people,
              organizations, and communities through impactful social events.
              Join, organize, or support initiatives that drive positive change
              in education, health, environment, and community development — all
              in one place.
            </p>

            <Link className="btn btn-outline btn-success text-blue-500" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;