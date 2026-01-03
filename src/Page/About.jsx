import React from 'react';
import about from '../assets/ssssssss.jpg'
import { Link } from 'react-router';

const About = () => {
  return (
    <div className=" md:max-w-[1400px] w-full mx-auto my-6 p-2">
      {/* banner section */}
      <div className="">
        <h1 className=" p-3 inline-block border-l border-r border-t rounded-tr-3xl text-2xl font-bold capitalize">
          About This Website
        </h1>

        <div>
          <img
            src={about}
            alt=""
            className=" w-full h-[500px] object-cover md:rounded-r-xl  md:rounded-b-xl"
          />
        </div>
      </div>
      {/* info */}

      <div className=" my-5 space-y-4 md:max-w-[700px] w-full">
        {/* Introduction */}
        <div>
          <h1 className="about">Introduction </h1>
          <p>
            Social Development Events Platform is a web application designed to
            showcase and manage social development events. It helps users
            discover, join, and participate in meaningful social activities
            easily.
          </p>
        </div>
        {/* Purpose */}
        <div>
          <h1 className=" about">Purpose </h1>
          <p>
            The main goal of this platform is to connect people with social
            development organizations and events, and to encourage community
            participation and social impact.
          </p>
        </div>
        {/* What users can do */}
        <div>
          <h1 className=" about">What users can do</h1>
          <p>
            <mark> Users can register or log in to the platform</mark>, join
            social development organizations, view upcoming events, and
            participate in events that interest them. Event organizers can also
            showcase their upcoming events on the platform.
          </p>
        </div>
        {/*Data & Security */}
        <div>
          <h1 className=" about">Data & Security </h1>
          <p>
            User data is securely stored, and users have full control over their
            information. They can update or delete their data at any time.
            Personal and confidential information remains private and is only
            visible to the user.
          </p>
        </div>
        <div>
          <Link to="/register" className=" btn btn-success  text-white">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;