import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import useAuth from '../Axios/useAuth';
import { toast } from 'react-toastify';

const Register = () => {
  const { register, updateUser,setUser } = useAuth();
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;

    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordValid.test(password)) {
       return toast.error('Password must have 6+ chars, 1 uppercase, 1 lowercase, 1 number & 1 special.');
    }


    const person = {
      displayName: name,
      photoURL:photo
    }

    register(email, password)
      .then(res => {
        toast.success('Successful')
        updateUser(person).then(() => {
          setUser(res.user)
        }).catch(err => {
         err
        })
        navigate('/')
      }).catch(err => {
      toast.error(err.message)
    })

   
  }
  
  const handleShow = (e) => {
    e.preventDefault()
    setShow(!show)
  }
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* photo  */}
              <label className="label">Photo_URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo_URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password
               */}
              <label className="label">Password</label>
              <div className=' relative'>
                <input
                  type={show ?'text':'password'}
                  name='password'
                  className="input"
                  placeholder="Password"
                  required
                />
                <div className=' absolute top-2 right-5'>
                  <button onClick={handleShow} className='btn btn-xs'>
                    {
                      show ?<IoIosEye />:<IoIosEyeOff></IoIosEyeOff>
                    }
                  </button>
                </div>
              </div>

              <button className="btn btn-outline btn-success  my-4 ">
                Register
              </button>
            </fieldset>
            <p>
              Already have an account{' '}
              <Link className="font-bold text-sky-600" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;