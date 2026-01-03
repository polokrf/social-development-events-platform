import React, { useRef, useState } from 'react';
import useAuth from '../../Axios/useAuth';
import { MdEdit } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const editRef = useRef();
  const [photoE,setPhotoE]=useState(true)
  const [nameE, setNameE] = useState(true)
  const { register, handleSubmit,reset } = useForm();

  const handleEdit = () => {
    editRef.current.showModal()
  }

  const handlePhoto = (e) => {
    e.preventDefault();
    setPhotoE(false)
  }
  const handleName = (e) => {
    e.preventDefault();
    setNameE(false)
  }
  const handlePhotoForm = (data) => {
   
    const photo=data.photo[0];

    const formdata = new FormData();
    formdata.append('image', photo);

     const photo_url = `https://api.imgbb.com/1/upload?key=${
       import.meta.env.VITE_IMAGE_KEY
      }`;
    axios.post(photo_url, formdata).then(res => {
      const person = {
        photoURL: res.data.data.url,
      }; 
      updateUser(person).then(() => { 
        editRef.current.close();
        reset()
      }).catch(err => { console.log(err) })
      toast.success('success')
    }).catch(err => {
      console.log(err)
    })
    
  }

  const handelNameForm = (data) => {
   
    const name = data.name;
    const person = {
      displayName:name
    }
    updateUser(person).then(() => {
      toast.success('success')
      
      editRef.current.close()
      reset()
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <div>
      <div className=" text-center my-10">
        <h1 className=" font-bold text-2xl mb-2">My Profile</h1>
        <p>View and update your personal details</p>
      </div>
      <div className=" card shadow-sm shadow-blue-200 sm:max-w-[350px] w-full mx-auto my-[45px] ">
        <div className=" text-right p-3">
          <button
            onClick={handleEdit}
            className="btn btn-success btn-xs text-white inline-block"
          >
            Edit
          </button>
        </div>
        <div className=" card-body">
          <div className="avatar text-center flex justify-center flex-col items-center">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 text-center">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className=" block text-center"
              />
            </div>
          </div>
          <div>
            <div className=" text-center mt-2">
              <h3 className=" text-xl font-bold">{user?.displayName}</h3>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}

      <dialog
        ref={editRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {/* photo Form */}
          <form onSubmit={handleSubmit(handlePhotoForm)}>
            {/* edit btn */}
            <div className=" text-right">
              {photoE ? (
                <button
                  onClick={handlePhoto}
                  type="button"
                  className=" btn btn-xs"
                >
                  <MdEdit />
                </button>
              ) : (
                <button className=" btn btn-xs btn-success text-white">
                  Save
                </button>
              )}
            </div>
            {/* file-input */}
            <div className=" fieldset">
              <label className="label">Photo</label>
              <input
                disabled={photoE}
                type="file"
                {...register('photo')}
                className=" file-input"
              />
            </div>
          </form>
          {/* display name Form */}
          <form onSubmit={handleSubmit(handelNameForm)}>
            {/* edit btn */}
            <div className=" text-right">
              {nameE ? (
                <button
                  onClick={handleName}
                  type="button"
                  className=" btn btn-xs"
                >
                  <MdEdit />
                </button>
              ) : (
                <button className=" btn btn-xs btn-success text-white">
                  Save
                </button>
              )}
            </div>
            {/* input field */}
            <div className=" fieldset">
              <label className="label">Name</label>
              <input
                defaultValue={user?.displayName}
                readOnly={nameE}
                type="text"
                {...register('name')}
                className=" input"
                id=""
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;