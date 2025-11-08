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
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handelLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                
              />
              <label className="label">Password</label>
              <div className=' relative'>
                 <input
                    type={show ?'text':'password'}
                    name='password'
                     className="input"
                     placeholder="Password"
                      />
                    <div className=' absolute top-2 right-5'>
                    <button onClick={handleShow} className='btn btn-xs'>
                       {
                        show ?<IoIosEye />:<IoIosEyeOff></IoIosEyeOff>
                        }
                    </button>
                    </div>
                </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-outline btn-success  my-4">
                Login
              </button>

            </fieldset>

            <div>
              <GoogleBtn></GoogleBtn>
            </div>
            <p className='mt-2'>
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