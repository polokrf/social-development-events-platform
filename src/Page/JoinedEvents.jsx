import React, { useEffect, useState } from 'react';
import useInstanceAxios from '../Axios/useInstanceAxios';
import useAuth from '../Axios/useAuth';
import Loader from '../Loading/Loader';
import JoinCards from '../components/JoinCards';

const JoinedEvents = () => {
   const { user } = useAuth();
   const instance = useInstanceAxios()
  const [joinData,setJoinData] = useState([])
  const [loading, setLoading] = useState(true)
  const [clean,setClean] =useState(false)

  useEffect(() => {
    instance.get(`/join-page?email=${user?.email}`)
      .then(data => {
        setJoinData(data.data)
        setLoading(false)
      }).catch(err => {
      console.log(err)
    })
  }, [instance, user,clean])
  
  if (loading) {
    return <Loader></Loader>
  }

  return (
    <div className="md:max-w-[1200px] mx-auto my-[50px] w-full">
      <div className="text-center mb-[30px]">
        <h2 className="title liner-text capitalize">Your joined events</h2>
      </div>
      {joinData.length === 0 ? (
        <div className="flex justify-center items-center mt-[45px]">
          <h2 className=" capitalize text-2xl font-bold text-red-600">
            you haven`<span className=" lowercase">t</span> joined any events
          </h2>
        </div>
      ) : (
        <div>
          <JoinCards setClean={setClean} clean={clean} joinData={joinData}></JoinCards>
        </div>
      )}
    </div>
  );
};

export default JoinedEvents;