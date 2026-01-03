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
  const [clean, setClean] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage,setCurrentPage]=useState(0)
  const limit = 6
  const [sortDate,setSortDate] =useState('')
  
  

  useEffect(() => {
    instance
      .get(
        `/join-page?email=${user?.email}&limit=${limit}&skip=${currentPage * limit}&sort=event_date&order=${sortDate}`
      )
      .then(data => {
        setJoinData(data.data.result);
        const total = data.data.count / limit;
        setTotalPage(Math.ceil(total));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [instance, user,clean,totalPage,currentPage,sortDate])
  
  if (loading) {
    return <Loader></Loader>
  }

  
  return (
    <div className="md:max-w-[1200px] mx-auto my-[50px] w-full">
      <div className="text-center mb-[30px]">
        <h2 className="text-2xl font-bold  capitalize mb-2">
          Your joined events
        </h2>
        <p>All the events you are participating in</p>
      </div>
      {/* sort */}
      <div className=" mb-3 p-2">
        <select
          className=" select"
          value={sortDate}
          onChange={e => setSortDate(e.target.value)}
        >
          <option value="">Sort by date</option>
          <option value="asc">Date-Asc</option>
          <option value="desc">Date-Desc</option>
        </select>
      </div>
      {/* map card */}
      {joinData.length === 0 ? (
        <div className="flex justify-center items-center mt-[45px]">
          <h2 className=" capitalize text-2xl font-bold text-red-600">
            you haven`<span className=" lowercase">t</span> joined any events
          </h2>
        </div>
      ) : (
        <div>
          <JoinCards
            setClean={setClean}
            clean={clean}
            joinData={joinData}
          ></JoinCards>
        </div>
      )}

      <div className=" text-center mt-6">
        {[...Array(totalPage).keys()].map(page => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              page === currentPage && ' btn-success text-white'
            } btn mr-2 `}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JoinedEvents;