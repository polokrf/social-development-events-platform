import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import GoogleBtn from '../GoogleLogin/GoogleBtn';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import useAuth from '../Axios/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
  const {login} = useAuth()
  const location = useLocation();
  const navigate = useNavigate()
  
  const [show, setShow] = useState(false);
  const[userEmail,setUserEmail]=useState('')
  const[userPass,setUserPass]=useState('')
  
  
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(res => {
        toast.success('Successful');
        navigate(`${location.state || '/'}`)
      }).catch(err => {
      toast.error(err.message)
    })
  }
   const handleShow = e => {
     e.preventDefault();
     setShow(!show);
  };
  
  const handleUser = () => {
    setUserEmail('polokkumar9030@gmail.com');
    setUserPass('123456')

  }
 
  return (
    <div className="flex flex-col justify-center min-h-screen items-center  ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm shadow-blue-200">
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className=" pl-6 mt-2 space-x-2">
          <button
            onClick={handleUser}
            className="btn btn-success btn-xs text-white"
          >
            User
          </button>
        </div>
        <div className="card-body ">
          <form onSubmit={handelLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className=" relative">
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  value={userPass}
                  onChange={e => setUserPass(e.target.value)}
                  className="input"
                  placeholder="Password"
                />
                <div className=" absolute top-2 right-5">
                  <button onClick={handleShow} className="btn btn-xs">
                    {show ? <IoIosEye /> : <IoIosEyeOff></IoIosEyeOff>}
                  </button>
                </div>
              </div>

              <button className="btn btn-outline btn-success  my-4">
                Login
              </button>
            </fieldset>

            <div>
              <GoogleBtn></GoogleBtn>
            </div>
            <p className="mt-2">
              Do not have an account{' '}
              <Link className="font-bold text-sky-600" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;