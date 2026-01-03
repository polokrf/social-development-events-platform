import React, { useEffect, useState } from 'react';
import useInstanceAxios from '../Axios/useInstanceAxios';
import useAuth from '../Axios/useAuth';
import Loader from '../Loading/Loader';
import ManageCards from '../components/manageCards';
import ManageSkeleton from '../Loading/Skeleton/ManageSkliton';

const ManageEvents = () => {
  const instance = useInstanceAxios();
  const { user } = useAuth();
  const [manageData, setManageData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [clear, setClear] = useState(false)
   const [totalPage, setTotalPage] = useState(0);
    const [currentPage,setCurrentPage]=useState(0)
    const limit = 4

  useEffect(() => {
    instance.get(`/manage-event?email=${user?.email}&limit=${limit}&skip=${currentPage * limit}`)
      .then(data => {
        setManageData(data.data.result);
        const total = data.data.count / limit;
        setTotalPage(Math.ceil(total))
        setLoading(false)
      }).catch(err => {
      console.log(err)
    })
  }, [instance, user,clear,totalPage,currentPage])
  
  if (loading) {
    return <ManageSkeleton></ManageSkeleton>
  }
  return (
    <div className="main">
      <div className="text-center mb-[30px]">
        <h2 className="title liner-text capitalize">My Events</h2>
      </div>
      {manageData.length === 0 ? (
        <div className="flex justify-center items-center mt-[45px] ">
          <h1 className="text-2xl font-bold capitalize text-red-600">
            You haven`<span className=" lowercase">t</span> create any event
          </h1>
        </div>
      ) : (
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
      )}

      {/* pagination */}
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

export default ManageEvents;