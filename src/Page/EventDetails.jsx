import React, { useEffect, useState } from 'react';
import useAxios from '../Axios/useAxios';
import { useParams } from 'react-router';
import Loader from '../Loading/Loader';
import { MdDateRange } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { BiCategoryAlt } from 'react-icons/bi';
import useInstanceAxios from '../Axios/useInstanceAxios';
import { toast } from 'react-toastify';
import useAuth from '../Axios/useAuth';

const EventDetails = () => {
  const instanceData = useAxios();
  const authInstance = useInstanceAxios()
   const { user } = useAuth()
  const { id } = useParams();
  const [details,setDetails]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    instanceData.get(`/details/${id}`).then(data => {
     
      setDetails(data.data)
      setLoading(false)
    }).catch(err => {
      console.log(err)
    });
  }, [instanceData, id])

  const handleJoin = () => {

    const joinEvents = {
      title: details?.title,
      location:details?.location,
      event_date:details?.event_date,
      event_category:details?.event_category,
      description:details.description,
      thumbnail: details?.thumbnail,
      email:user?.email
    }
    authInstance.post('/join',joinEvents)
      .then(data => {
        
        if (data.data) {
           toast.success('Successful');
        } else {
          toast.error('Login / register plz')
       }
       
         setLoading(false);
      }).catch(err => {
        console.log(err)
      })
  }
  
  if (loading) {
    return <Loader></Loader>
  }

  const {title,location,event_date,event_category,description,thumbnail} = details
  return (
    <div className="md:max-w-[900px] mx-auto bg-gray-50 shadow-sm rounded-xl  p-3 grid md:grid-cols-2 grid-cols-1 w-full my-[60px]">
      {/* img and btn */}
      <div>
        <div>
          <img className=" w-full block mb-4 " src={thumbnail} alt="event" />
        </div>
        <div>
          <button
            onClick={handleJoin}
            className="btn btn-outline btn-success w-full hidden md:block"
          >
            Join Now
          </button>
        </div>
      </div>
      {/* title,location,date,category */}
      <div>
        <div className="card-body">
          {/* title and category */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="card-title inline-block  capitalize">{title}</h2>
            </div>
            <div>
              <p className="flex items-center">
                <BiCategoryAlt color="blue" />{' '}
                <span className="ml-2 badge badge-info text-white capitalize">
                  {event_category}
                </span>
              </p>
            </div>
          </div>
          {/* location and date */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="flex items-center">
                <FaLocationDot color="blue" />
                <span className="ml-1 capitalize "> {location}</span>
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <MdDateRange />
                <span className="ml-1">
                  {' '}
                  {new Date(event_date).toISOString().split('T')[0]}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p>{description}</p>
          </div>

          <div className=" mt-3 md:hidden block">
            <button
              onClick={handleJoin}
              className="btn btn-outline btn-success w-full block"
            >
              Join Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[50px]">
          <h2 className="font-semibold capitalize text-xl hidden md:block ">
            you can join if you want
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;