import React, { useEffect, useState } from 'react';
import useInstanceAxios from '../Axios/useInstanceAxios';
import useAuth from '../Axios/useAuth';
import Loader from '../Loading/Loader';
import ManageCards from '../components/manageCards';

const ManageEvents = () => {
  const instance = useInstanceAxios();
  const { user } = useAuth();
  const [manageData, setManageData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [clear,setClear] = useState(false)

  useEffect(() => {
    instance.get(`/manage-event?email=${user?.email}`)
      .then(data => {
        setManageData(data.data)
        setLoading(false)
      }).catch(err => {
      console.log(err)
    })
  }, [instance, user,clear])
  
  if (loading) {
    return <Loader></Loader>
  }
  return (
    <div className="main">
      <div className="text-center mb-[30px]">
        <h2 className="title liner-text capitalize">My Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-stretch gap-4 ">
        {manageData.map(data => (
          <ManageCards
            key={data._id}
            data={data}
            setClear={setClear}
            clear={clear}
          ></ManageCards>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;