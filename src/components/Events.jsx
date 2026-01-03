import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router';

const Events = ({event}) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm shadow-blue-200  h-full">
        <figure>
          <img
            className="h-[300px] w-full rounded-xl shadow-sm"
            src={event.thumbnail}
            alt="event"
          />
        </figure>
        <div className="card-body">
          {/* title and category */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="md:card-title inline-block text-[14px]  capitalize">
                {event.title}
              </h2>
            </div>
            <div>
              <p className="flex items-center">
                <BiCategoryAlt color="blue" />{' '}
                <span className="ml-2 badge badge-info text-white capitalize">
                  {event.event_category}
                </span>
              </p>
            </div>
          </div>
          {/* location and date */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="flex items-center">
                <FaLocationDot color="blue" />
                <span className="ml-1   "> {event.location}</span>
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <MdDateRange />
                <span className="ml-1">
                  {' '}
                  {new Date(event.event_date).toISOString().split('T')[0]}
                </span>
              </p>
            </div>
          </div>
          <div className="card-actions ">
            <Link
              className="btn btn-outline btn-success w-full"
              to={`/details/${event._id}`}
            >
              view Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;