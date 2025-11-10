import React, { useEffect, useState } from 'react';
import useAxios from '../Axios/useAxios';
import Loader from '../Loading/Loader';
import Events from '../components/Events';

const UpcomingEvents = () => {
  const instance = useAxios();
  const [events, setEvents] = useState([])
  const [loading,setLoading] =useState(true)

  useEffect(() => {
    instance.get('/create-event')
      .then(data => {
        
        setEvents(data.data)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      });
  }, [instance]) 
  
  if (loading) {
    return <Loader></Loader>
  }
 
  return (
    <div className="main">
      <div className="mb-[35px] text-center">
        <h2 className="title liner-text">Upcoming Events</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center gap-4 p-2'>
        {events.map(event => (
          <Events key={event._id} event={event}></Events>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;