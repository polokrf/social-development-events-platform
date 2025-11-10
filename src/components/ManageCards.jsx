import React from 'react';
import { Link } from 'react-router';

const ManageCards = ({ data }) => {
  console.log(data)
 

  const handleDelete = () => {
    
  }
 
  return (
    <div >
      <div className="card md:card-side  bg-base-100 shadow-sm flex h-full">
        <div>
          <img
            className="w-full h-[300px] md:h-full object-cover"
            src={data.thumbnail}
            alt="event"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title capitalize">{data.title}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end mt-3">
            
            <Link className="btn btn-outline btn-success" to={`/update-event/${data._id}`}>Update</Link>
            <button onClick={()=>handleDelete(data._id)} className='btn btn-warning btn-outline'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ManageCards