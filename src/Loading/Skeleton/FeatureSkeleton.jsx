import React from 'react';

const FeatureSkeleton = () => {
  return (
    <div className=' flex gap-4 my-[45px]'>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-full card-body shadow-sm rounded-xl my-[25px] shadow-blue-200 animate-pulse">
          {/* Image Skeleton */}
          <div className="w-[100px] h-[100px] rounded-full bg-gray-300 mx-auto"></div>

          {/* Text Skeleton */}
          <div className="text-center mt-4 space-y-2">
            <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto"></div>
            <div className="h-3 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSkeleton;