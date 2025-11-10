import React from 'react';

const JoinCards = ({joinData}) => {
  return (
    <div className='bg-gray-50 p-4 rounded-2xl'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Event Img</th>
              <th>Event Name</th>
              <th>Location</th>
              <th>Event Date</th>
            </tr>
          </thead>
          <tbody>
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
                  <h3 className="font-bold  capitalize">{data.title}</h3>
                </td>
                <td>{data.location}</td>
                <th>
                  <p>
                    {new Date(data.event_date).toISOString().split('T')[0]}
                  </p>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JoinCards;