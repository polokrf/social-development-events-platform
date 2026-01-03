import React, { useEffect, useState } from 'react';
import useInstanceAxios from '../../Axios/useInstanceAxios';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { MdEmojiEvents } from 'react-icons/md';
import OverViewSkeleton from '../../Loading/Skeleton/OverViewSkeleton';

const OverView = () => {
  const instance = useInstanceAxios();
  const [overview, setOverView] = useState([]);
  const [loading,SetLoading]=useState(true)

  useEffect(() => {
    instance.get('/over-view').then(res => {
      const data = res.data[0];
      console.log(data)

      const chartData = [
        {
          name: 'Total Users',
          value: data?.totalUsers,
          icon: <FaUser size={15} ></FaUser>,
        },
        {
          name: 'Total Events',
          value: data?.totalEvents,

          icon: <MdEmojiEvents size={18}  />,
        },
        {
          name: 'Total Joined',
          value: data?.totalJoined,
          icon: <FaCalendarAlt size={15} />,
        },
      ];
      setOverView(chartData)
      SetLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }, [instance,overview]);

  if (loading) {
    return <OverViewSkeleton></OverViewSkeleton>
  }
  return (
    <div className=' py-20 min-h-screen bg-linear-to-r to-green-950 from-green-900'>
      <div className=' mb-6 text-center'>
        <h2 className=' text-2xl font-bold mb-2 text-white'>Overview</h2>
        <p className=' text-white'>
          A quick summary of system activity, statistics, and performance
          insights
        </p>
      </div>
      <div className="  text-center my-10 ">
        {overview.map((ov, i) => (
          <div key={i} className="stats shadow-sm shadow-green-700 bg-green-500 mr-2 mb-2 hover:animate-pulse cursor-pointer text-white">
            <div className="stat">
              <div className=" flex items-center">
                {' '}
                <span className="  ">{ov?.icon}</span>
                <h4 className=" text-xl font-bold capitalize"> {ov?.name}</h4>
              </div>
              <div className="stat-value  ">
                {' '}
                <span>{ov?.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" sm:max-w-[400px] w-full h-[300px]  mx-auto my-20">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={overview}>
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="value" fill="green" barSize={30}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverView;