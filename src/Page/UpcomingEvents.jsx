import React, { useEffect, useState } from 'react';
import useAxios from '../Axios/useAxios';
import Loader from '../Loading/Loader';
import Events from '../components/Events';
import EventsSkeleton from '../Loading/Skeleton/eventsSkeleton';

const UpcomingEvents = () => {
  const instance = useAxios();
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterData, setFilterData] = useState('');
  const [search, setSearch] = useState('')
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage,setCurrentPage]=useState(0)
  const limit = 6
  
  useEffect(() => {
   instance.get(`/events-upcoming?search=${search}&category=${filterData}&limit=${limit}&skip=${currentPage * limit}`)
     .then(data => {
       setEvents(data.data.result);
       const total = data.data.count / limit;
       setTotalPage(Math.ceil(total))
       setLoading(false);
     })
     .catch(err => {
       console.log(err);
     });
  }, [instance,search,filterData,totalPage,currentPage]); 

  const handleFilter = e => {
    e.preventDefault()
    const eventType = e.target.filterType.value;
    setFilterData(eventType)
    

   
  };
  const handelSearch = e => {
    e.preventDefault();

    const title = e.target.title.value;
    setSearch(title)

   
  };
  
  if (loading) {
    return <EventsSkeleton></EventsSkeleton>
  }

 
  return (
    <div className="main">
      <div className="mb-[35px] text-center">
        <h2 className="title liner-text mb-2">Upcoming Events</h2>
        <p>Find and join upcoming events near you</p>
      </div>
      <div className="md:flex justify-between p2">
        <form onSubmit={handleFilter} className="flex">
          <div className="mr-3 w-full ">
            <select
              name="filterType"
              className="select mb-4 rounded-full"
              id=""
            >
              <option value="">Select Now</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
              <option value="Awareness-Campaign">Awareness-Campaign</option>
              <option value="Educational-Workshop">Educational-Workshop</option>
            </select>
          </div>
          <button className="btn btn-info rounded-full">Filter</button>
        </form>
        {/* search form */}
        <div>
          <form onSubmit={handelSearch} className="flex">
            <div className="mr-3 w-full">
              <label className="input rounded-full mb-4 ">
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
                <input
                  type="search"
                  name="title"
                  required
                  placeholder="Search"
                />
              </label>
            </div>
            <button className="btn btn-info  rounded-full">Search</button>
          </form>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-stretch gap-4  ">
          {events.map(event => (
            <Events key={event._id} event={event}></Events>
          ))}
        </div>
      </div>
      {/* pagination */}
      <div className=" text-center mt-6">
        {[...Array(totalPage).keys()].map(page => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              page === currentPage && ' btn-success text-white'
            } btn mr-2 `}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;