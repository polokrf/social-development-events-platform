import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import useAuth from '../Axios/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const { register, updateUser,setUser } = useAuth();
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.files[0];
    const email = target.email.value;
    const password = target.password.value;

    
    
    const passwordValid = /^.{6,}$/;

    if (!passwordValid.test(password)) {
       return toast.error('Password must have 6 length');
    }

   



    register(email, password)
      .then(regres => {
         const formData = new FormData();
         formData.append('image', photo);
         const photo_url = `https://api.imgbb.com/1/upload?key=${
           import.meta.env.VITE_IMAGE_KEY
         }`;

        axios.post(photo_url, formData).then(potoRes => {
            const person = {
              displayName: name,
              photoURL: potoRes.data.data.url,
          };
          setUser({ ...regres, ...person });
          
          const userInfo = {
            email: email,
            userName: name,
            photo: potoRes.data.data.url,
            userRole: 'user',
            status:'Active'
          }
           
          axios.post('https://social-development-events.vercel.app/user-data',userInfo).then(res => {
            
          }).catch(err => {
            console.log(err)
          })
            updateUser(person)
              .then(() => {
                 
              })
              .catch(err => {
                err;
              });
          
        }).catch(err => {
           console.log(err)
         });
       
        toast.success('Successful');
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
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm shadow-blue-200">
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
                type="file"
                name="photo"
                className="file-input"
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
              <div className=" relative">
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div className=" absolute top-2 right-5">
                  <button onClick={handleShow} className="btn btn-xs">
                    {show ? <IoIosEye /> : <IoIosEyeOff></IoIosEyeOff>}
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