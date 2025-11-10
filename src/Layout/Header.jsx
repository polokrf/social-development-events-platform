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
    <div className="w-full bg-base-100 shadow-sm">
      <div className="navbar md:max-w-[1440px] mx-auto w-full ">
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
          <div className=" liner-text text-xl lg:text-2xl font-bold">
            <h1 className="liner-text font-bold text-3xl ">SDEP</h1>
          </div>
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
                className={user && 'w-[50px] h-[50px] rounded-full'}
                src={user?.photoURL}
                alt=""
                title={user?.displayName}
              />
              {user && (
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu w-fit bg-base-100 rounded-box z-1   p-2 shadow-sm "
                >
                  <li className="mb-2">
                    <NavLink to="/create">CreateEvent</NavLink>
                  </li>

                  <li className="mb-2">
                    <NavLink to="/manage">ManageEvents</NavLink>
                  </li>
                  <li>
                    <NavLink to="/joined">JoinedEvents</NavLink>
                  </li>
                </ul>
              )}
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