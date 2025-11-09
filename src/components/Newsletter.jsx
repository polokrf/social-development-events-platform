import React from 'react';

const Newsletter = () => {
  return (
    <div>
      <form className="w-full bg-white  p-4 rounded-2xl shadow">
        <div className="text-center mb-[25px]">
          <h1 className="font-bold text-2xl ">
            Subscribe to our Newsletter
          </h1>
        </div>
        <label className="label block font-bold mb-2 ">Name</label>
        <input
          type="text"
          className="input w-full mb-2"
          name=""
          id=""
          placeholder="Name"
        />
        <label className="label block font-bold mb-2 ">Email</label>
        <input
          type="email"
          className="input w-full"
          name=""
          id=""
          placeholder="Email"
        />
        <div>
          <label className="label block font-bold my-2 ">
            Interest
          </label>
          <select className=" select w-full ">
            <option>Social Events</option>
            <option>Charity Updates</option>
            <option>Community Work</option>
          </select>
        </div>

        <div className="mt-3">
          <button className="btn btn-outline btn-success rounded-full w-full">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;

