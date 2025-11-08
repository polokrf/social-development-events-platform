import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../Axios/useAuth';
import { toast } from 'react-toastify';

const Header = () => {
  const { user,logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then(()=>{
      toast.success('LogOut Successful')
    }).catch(err => {
      toast.error(err.message)
    })
  }

  const navLi = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/upcoming">UpcomingEvents</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLi}
            </ul>
          </div>
          <h1 className=" liner-text text-xl lg:text-2xl font-bold">
            Social Development Events Platform
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLi}</ul>
        </div>

        <div className="navbar-end ">
          {/* dropDown menu */}
          <div>
            <div className="dropdown mr-2">
              <img
                tabIndex={0}
                className="w-[50px] h-[50px] rounded-full"
                src={user?.photoURL}
                alt=""
                title={user?.displayName}
              />
              <ul
                tabIndex="-1"
                className="dropdown-content menu max-w-52 bg-base-100 rounded-box z-1   p-2 shadow-sm "
              >
                <span className="font-bold border-b"> Name</span>
                <li className="mb-2 text-blue-400">{user?.displayName}</li>
                <span className="font-bold border-b"> Email</span>
                <li className=" text-blue-400">{user?.email}</li>
              </ul>
            </div>
          </div>
          {/* link in login page or logout */}
          <div>
            {user ? (
              <Link
                onClick={handleLogOut}
                className="btn btn-active btn-success text-white"
              >
                Log-Out
              </Link>
            ) : (
              <Link
                className="btn btn-active btn-success text-white"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;