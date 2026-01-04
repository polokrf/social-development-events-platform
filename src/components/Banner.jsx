import React from 'react';

import { Link } from 'react-router';
import { TypeAnimation } from 'react-type-animation';

import img from '../assets/environment-volunteer-teamwork-concept.jpg'


const Banner = () => {
  return (
    <div className="w-full ">
      {/* items 1 */}
      <div className="  ">
        <div
          className="hero     w-full  mb-[45px]  mx-auto bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className=" absolute  w-full bg-black/70 h-full  top-0"></div>
          <div className="hero-content gap-4 main  " data-aos="fade-down">
            <div>
              <h1 className=" md:text-4xl text-3xl font-bold  text-green-500">
                <TypeAnimation
                  sequence={[
                    ' Social Development Events Platform',

                    500,
                    'Social Development Events Platform',
                  ]}
                  repeat={Infinity}
                ></TypeAnimation>
              </h1>
              <p className="py-6 text-white">
                Social Development Events Platform (SDEP) connects people,
                organizations, and communities through impactful social events.
                Join, organize, or support initiatives that drive positive
                change in education, health, environment, and community
                development — all in one place.
              </p>
              <ol className=" list-disc list-inside space-y-2 text-white mb-3">
                <li>Create and manage social development events easily</li>
                <li>Join events focused on education and health</li>
                <li>Secure user authentication system</li>
                <li>Organizer dashboard with event insights</li>
                <li>Participant-friendly event experience</li>
                <li>Mobile-friendly and responsive design</li>
              </ol>

              <Link
                className="btn btn-outline btn-success text-white"
                to="/register"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;