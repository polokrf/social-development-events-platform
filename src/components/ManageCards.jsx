import React from 'react';
import { Link } from 'react-router';
import useInstanceAxios from '../Axios/useInstanceAxios';
import { MdDateRange } from 'react-icons/md';

const ManageCards = ({ data, setClear, clear }) => {
  const instance = useInstanceAxios();

  const handleDelete = id => {
    instance
      .delete(`/delete/${id}`)
      .then(data => {
        setClear(!clear);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card md:card-side  bg-base-100 shadow-sm  h-full flex ">
        <div className=" w-full md:w-[50%]">
          <img
            className=" h-[300px] w-full md:h-full object-cover"
            src={data.thumbnail}
            alt="event"
          />
        </div>
        <div className="card-body w-full  md:w-[70%]">
         
            <h2 className="card-title capitalize">{data.title}</h2>
            <p className="flex items-center">
              <MdDateRange />
              <span className="ml-1">
                {' '}
                {new Date(data.event_date).toISOString().split('T')[0]}
              </span>
            </p>
          
          <p>{data.description}</p>
          <div className="card-actions justify-end mt-3">
            <Link
              className="btn btn-outline btn-success"
              to={`/update-event/${data._id}`}
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(data._id)}
              className="btn btn-warning btn-outline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCards