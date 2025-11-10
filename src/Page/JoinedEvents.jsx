import React, { useEffect, useState } from 'react';
import useInstanceAxios from '../Axios/useInstanceAxios';
import useAuth from '../Axios/useAuth';
import Loader from '../Loading/Loader';
import JoinCards from '../components/JoinCards';

const JoinedEvents = () => {
   const { user } = useAuth();
   const instance = useInstanceAxios()
  const [joinData,setJoinData] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    instance.get(`/join-page?email=${user?.email}`)
      .then(data => {
        setJoinData(data.data)
        setLoading(false)
      }).catch(err => {
      console.log(err)
    })
  }, [instance, user])
  
  if (loading) {
    return <Loader></Loader>
  }

  return (
    <div className="main">
      <div className='text-center mb-[30px]'>
        <h2 className='title liner-text capitalize'>Your joined events</h2>
      </div>
      <div>
        <JoinCards joinData={joinData}></JoinCards>
      </div>
    </div>
  );
};

export default JoinedEvents;