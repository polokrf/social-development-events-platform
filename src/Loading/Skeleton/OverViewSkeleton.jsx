import React from 'react';

const OverViewSkeleton = () => {
  return (
    <div className="py-20 min-h-screen bg-linear-to-r to-green-950 from-green-900 animate-pulse">
      {/* Title Skeleton */}
      <div className="mb-6 text-center">
        <div className="h-6 w-32 mx-auto bg-green-700 rounded mb-3"></div>
        <div className="h-4 w-80 mx-auto bg-green-700 rounded"></div>
      </div>

      {/* Cards Skeleton */}
      <div className="text-center my-10 flex flex-wrap justify-center gap-3">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="stats shadow-sm shadow-green-700 bg-green-800 text-white w-[200px]"
          >
            <div className="stat">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 bg-green-600 rounded-full"></div>
                <div className="h-4 w-24 bg-green-600 rounded"></div>
              </div>
              <div className="h-8 w-16 bg-green-600 rounded mx-auto"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Skeleton */}
      <div className="sm:max-w-[400px] w-full h-[300px] mx-auto my-20 bg-green-800 rounded-lg flex items-end justify-around p-6">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div
            key={i}
            className="w-6 bg-green-600 rounded"
            style={{ height: `${40 + i * 30}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OverViewSkeleton;