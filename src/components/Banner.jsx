import React from 'react';
import banner from '../assets/7415191.jpg'
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="w-full ">
      <div className="hero  main">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="lg:w-[60%] w-full h-[350px] object-cover rounded-lg shadow-2xl"
          />

          <div data-aos="fade-up">
            <h1 className="lg:text-5xl text-3xl font-bold liner-text">
              Social Development Events Platform
            </h1>
            <p className="py-6">
              Social Development Events Platform (SDEP) connects people,
              organizations, and communities through impactful social events.
              Join, organize, or support initiatives that drive positive change
              in education, health, environment, and community development — all
              in one place.
            </p>

            <Link className="btn btn-outline btn-success" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;