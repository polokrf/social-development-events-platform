import React, { useEffect, useState } from 'react';
import useAxios from '../Axios/useAxios';
import Loader from '../Loading/Loader';
import Events from '../components/Events';

const UpcomingEvents = () => {
  const instance = useAxios();
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterData , setFilterData] =useState()
  
  useEffect(() => {
   instance
     .get('/events')
     .then(data => {
       setEvents(data.data);
       setLoading(false);
     })
     .catch(err => {
       console.log(err);
     });
  }, [instance]); 

  const handleFilter = e => {
    e.preventDefault()
    const eventType = e.target.filterType.value;
    
    if (eventType) {
      instance.get(`/event-filter?event_category=${eventType}`)
        .then(data => {
          if (data.data) {
            setEvents(data.data);
            
          } 
        })
        .catch(err => {
          console.log(err);
        });
    }

   
  };
  // const handleSerch = e => {
  //   e.preventDefault()

  //   const event = e.target.filterType.value;
  //   console.log(event);

  //   instance.get(`/event-filter?event_category=${event}`)
  //     .then(data => {
  //       setEvents(data.data);
  //       setRefres(!refres);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  
  if (loading) {
    return <Loader></Loader>
  }

 
  return (
    <div className="main">
      <div className="mb-[35px] text-center">
        <h2 className="title liner-text">Upcoming Events</h2>
      </div>
      <div className="flex justify-between p2">
        <form onSubmit={handleFilter}>
          <label className="label block mb-2">Filter-Category</label>
          <select name="filterType" className="select mb-4" id="">
            <option value="">Select Now</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
            <option value="Awareness-Campaign">Awareness-Campaign</option>
            <option value="Educational-Workshop">Educational-Workshop</option>
          </select>
          <button className="btn">Filter</button>
        </form>
        <div>
          <form>
            <label className="label block mb-2">Search Now</label>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </form>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center gap-4 p-2">
          {events.map(event => (
            <Events key={event._id} event={event}></Events>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;