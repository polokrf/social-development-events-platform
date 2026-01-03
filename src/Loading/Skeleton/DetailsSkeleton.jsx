import React from 'react';

const DetailsSkeleton = () => {
  return (
    
      <div
        className="md:max-w-[900px] mx-auto bg-gray-50 shadow-sm rounded-xl p-3 
                    grid md:grid-cols-2 grid-cols-1 w-full my-[60px] 
                    animate-pulse"
      >
        {/* Left: Image & Button */}
        <div>
          {/* Image skeleton */}
          <div className="w-full h-[260px] bg-gray-300 rounded-lg mb-4"></div>

          {/* Join button (desktop only) */}
          <div className="hidden md:block">
            <div className="h-11 w-full bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div className="card-body space-y-4">
            {/* Title & Category */}
            <div className="flex justify-between items-center">
              <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
              <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
            </div>

            {/* Location & Date */}
            <div className="flex justify-between items-center">
              <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            </div>

            {/* Join button (mobile only) */}
            <div className="md:hidden block pt-2">
              <div className="h-11 w-full bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          {/* Animated text skeleton (desktop only) */}
          <div className="flex justify-center items-center mt-[50px] hidden md:block">
            <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    
  );
};

export default DetailsSkeleton;