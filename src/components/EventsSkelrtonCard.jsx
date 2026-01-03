import React from 'react';

const EventsSkelrtonCard = () => {
  return (
    <div className="card bg-base-100 shadow-sm h-full animate-pulse">
      {/* Image Skeleton */}
      <figure>
        <div className="h-[300px] w-full rounded-xl bg-gray-300"></div>
      </figure>

      <div className="card-body">
        {/* Title & Category */}
        <div className="flex justify-between items-center mb-3">
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-5 w-20 bg-gray-300 rounded-full"></div>
        </div>

        {/* Location & Date */}
        <div className="flex justify-between items-center mb-3">
          <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        </div>

        {/* Button */}
        <div className="card-actions">
          <div className="h-10 w-full bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default EventsSkelrtonCard;