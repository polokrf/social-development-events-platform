import React from 'react';
import useInstanceAxios from '../Axios/useInstanceAxios';

const JoinCards = ({ joinData, setClean,clean }) => {
  const instance = useInstanceAxios();

  const handleRemove = id => {
    instance
      .delete(`/delete-join/${id}`)
      .then(data => {
        console.log(data.data);
        setClean(!clean)
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="bg-gray-50 p-4 rounded-2xl">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>SL</th>
              <th>Event Img</th>
              <th>Event Name</th>
              <th>Location</th>
              <th>Event Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {/* row 1 */}
            {joinData.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={data?.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50">
                        {data?.event_category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h3 className="md:font-bold  capitalize text-[10px] md:text-[16px]">
                    {data.title}
                  </h3>
                </td>
                <td className="font-semibold text-[10px] md:text-[16px]">
                  {data.location}
                </td>
                <th>
                  <p className="text-[10px] md:text-[16px]">
                    {new Date(data.event_date).toISOString().split('T')[0]}
                  </p>
                </th>

                <td>
                  <button
                    onClick={() => handleRemove(data._id)}
                    className="btn btn-error btn-outline btn-xs"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JoinCards;