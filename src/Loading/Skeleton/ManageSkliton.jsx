import React from 'react';

const ManageSkeleton = () => {
  return (
    <div className="main grid grid-cols-1 md:grid-cols-2  justify-center items-stretch gap-4">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="">
          <div className="card md:card-side bg-base-100 shadow-sm h-full flex animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full md:w-[50%]">
              <div className="h-[300px] md:h-full w-full bg-gray-300 rounded-none md:rounded-l-lg"></div>
            </div>

            {/* Content Skeleton */}
            <div className="card-body w-full md:w-[70%] space-y-3">
              {/* Title */}
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

              {/* Date */}
              <div className="h-4 w-1/3 bg-gray-300 rounded"></div>

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-4">
                <div className="h-10 w-24 bg-gray-300 rounded"></div>
                <div className="h-10 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



export default ManageSkeleton;