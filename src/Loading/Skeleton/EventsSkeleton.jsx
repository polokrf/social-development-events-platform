import React from 'react';
import EventsSkelrtonCard from '../../components/eventsSkelrtonCard';

const EventsSkeleton = () => {
  return (
    <div className=' main'>
      <div
        className="grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      justify-center
      items-stretch
      gap-4"
      >
        {[...Array(6)].map((_, i) => (
          <EventsSkelrtonCard key={i}></EventsSkelrtonCard>
        ))}
      </div>
    </div>
  );
};

export default EventsSkeleton;