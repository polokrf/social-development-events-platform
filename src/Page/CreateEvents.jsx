import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useInstanceAxios from '../Axios/useInstanceAxios';
import { toast } from 'react-toastify';

const CreateEvents = () => {
  const instance = useInstanceAxios();
 
  const [startDate, setStartDate] = useState(null);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)

  const handelEvent = (e)=>{
    e.preventDefault();
    const target = e.target
    const title = target.title.value;
    const select = target.select.value;
    const photo = target.photo.value;
    const location = target.location.value;
    const description = target.description.value;

    const events = {
      title: title,
      event_category: select,
      thumbnail: photo,
      location: location,
      description: description,
      event_date: startDate,
    };

    instance.post('/events', events)
      .then(data => {
       
        toast.success('successful')
        e.target.reset()
      }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className=" main">
      <form onSubmit={handelEvent} className="max-w-[500px] mx-auto p-4 bg-white shadow-lg ">
        <div>
          {/* first div */}
          <div className="md:flex items-center mb-2">
            {/* title */}
            <div className="w-full mr-2">
              <label className="label block mb-2">Title</label>
              <input
                type="text"
                className="input w-full"
                name="title"
                id=""
                placeholder="title"
              />
            </div>
            {/* event */}
            <div className="w-full">
              <label className="label block mb-2">Select-Event</label>
              <select name="select" className="select w-full" id="">
                <option value="Cleanup">Cleanup</option>
                <option value="Plantation">Plantation</option>
                <option value="Donation">Donation</option>
                <option value="Awareness Campaign">Awareness-Campaign</option>
                <option value="Educational Workshop">
                  Educational-Workshop
                </option>
              </select>
            </div>
          </div>
          {/* scend div */}
          <div>
            {/* thumbnail Image URL */}
            <div className="mb-2">
              <label className="label block mb-2">thumbnail Image_URL</label>
              <input
                type="text"
                className="input w-full"
                name="photo"
                id=""
                placeholder="Image_URL"
              />
            </div>
          </div>
          {/* 3rd div */}
          <div>
            {/* location */}
            <div className="w-full  mb-2">
              <label className="label block mb-2">location</label>
              <input
                type="text"
                className="input w-full"
                name="location"
                id=""
                placeholder="location"
              />
            </div>
            {/* Date */}

            <div>
              <label className="label block mb-2">Date</label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                className="input w-full"
                minDate={tomorrow}
                placeholderText="Select future date"
              ></DatePicker>
            </div>
          </div>

          {/* 4th div */}
          <div>
            <fieldset className="fieldset text-center">
              <legend className='mb-2'>Description</legend>
              <textarea
                className="textarea h-24 w-full"
                name="description"
                placeholder="Description"
              ></textarea>
            </fieldset>
          </div>
        </div>

        <div className="mt-3">
          <button className="btn btn-outline btn-success w-full">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvents;