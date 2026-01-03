import React from 'react';

const FedBackCard = ({rew}) => {
  return (
    <div>
      <div className="card shadow-sm shadow-blue-200 card-border bg-base-100 w-96">
        <div className="card-body">
          <div className=" border-b border-dotted">
            {/* <div>
              <img className="w-[50px] mb-3" src={reviewQuote} alt="" />
            </div> */}
            <p className="mb-4">{rew.review}</p>
          </div>
          <div className="">
            <div className="flex items-center ">
              <img
                className=" rounded-full w-[50px] mr-3"
                src={rew.user_photoURL}
                alt=""
              />
              <h3 className="font-bold  text-secondary">{rew.userName}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FedBackCard;