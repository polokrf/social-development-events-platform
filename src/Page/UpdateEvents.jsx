import React, { useEffect, useState } from 'react';
import useAuth from '../Axios/useAuth';
import useInstanceAxios from '../Axios/useInstanceAxios';
import DatePicker from 'react-datepicker';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const UpdateEvents = () => {
  
  const instance = useInstanceAxios();
  const { id } = useParams();
  const { user } = useAuth();
  const navigate =useNavigate()
  
  const [dataEvent, setDataEvent] = useState([]);
  const [loading,setLoading] =useState(true)

  const [startDate, setStartDate] = useState(null);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    instance.get(`/events-upcoming`)
      .then(data => {
        setDataEvent(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [instance])
  
  const updateData =Array.isArray(dataEvent) && dataEvent.find(data => data._id == id)

 
  const handelEventUpdate = (e) => {
    e.preventDefault();
    const target = e.target;
    const title = target.title.value;
    const select = target.select.value;
    const photo = target.photo.value;
    const location = target.location.value;
    const description = target.description.value;

    const updateEvents = {
      title: title,
      event_category: select,
      thumbnail: photo,
      location: location,
      description: description,
      event_date:startDate,
      email: user?.email,
    };

    instance.put(`/update-event/${id}`, updateEvents)
      .then(data => {
        if (data.data) {
           toast.success('successful');
           navigate('/manage');
        }
       
      }).catch(err => {
      console.log(err)
    })

  }
  return (
    <div className=" main">
      <form
        onSubmit={handelEventUpdate}
        className="max-w-[500px] mx-auto p-4 bg-[#001f3f] shadow-lg "
      >
        <div>
          {/* first div */}
          <div className="md:flex items-center mb-2">
            {/* title */}
            <div className="w-full mr-2">
              <label className="label block mb-2 text-white">Title</label>
              <input
                type="text"
                className="input w-full"
                name="title"
                id=""
                defaultValue={updateData?.title}
                placeholder="title"
              />
            </div>
            {/* event */}
            <div className="w-full">
              <label className="label block mb-2 text-white">
                Select-Event
              </label>
              <select name="select" className="select w-full" id="">
                <option defaultValue={updateData?.event_category}>
                  {' '}
                  {updateData?.event_category}
                </option>
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
              <label className="label block mb-2 text-white">
                thumbnail Image_URL
              </label>
              <input
                type="text"
                className="input w-full"
                name="photo"
                defaultValue={updateData?.thumbnail}
                id=""
                placeholder="Image_URL"
              />
            </div>
          </div>
          {/* 3rd div */}
          <div>
            {/* location */}
            <div className="w-full  mb-2">
              <label className="label block mb-2 text-white">location</label>
              <input
                type="text"
                className="input w-full"
                name="location"
                defaultValue={updateData?.location}
                id=""
                placeholder="location"
              />
            </div>
            {/* Date */}

            <div>
              <label className="label block mb-2 text-white">Date</label>
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
              <legend className="mb-2 text-white">Description</legend>
              <textarea
                className="textarea h-24 w-full"
                name="description"
                placeholder="Description"
                defaultValue={updateData?.description}
              ></textarea>
            </fieldset>
          </div>
        </div>

        <div className="mt-3">
          <button className="btn btn-outline btn-success w-full">
            Update Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEvents;