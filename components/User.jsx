import React from 'react';
import { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import EditUser from './EditUser';
const User = ({ id, isCustomer, email, name, phone, packages }) => {
  const [isEditing, setIsEditing] = useState(false);

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  return (
    <>
      <div className={isEditing ? 'hidden' : 'block'}>
        <div className='flex flex-col p-5 space-y-4 w-[400px] bg-slate-300'>
          <p>
            Email: <span>{email}</span>
          </p>
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            Phone:
            <span>{phone}</span>
          </p>
          <p>
            isCustomer: <span>{isCustomer ? 'True' : 'False'}</span>
          </p>

          <div className='border-y-2 rounded border-slate-500'></div>

          <p>
            Packages: <span>{packages}</span>
          </p>
        </div>
        <div>
          <button
            className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              setIsEditing(!isEditing);
              console.log(id);
            }}
          >
            Edit
          </button>
          <button
            className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => deleteUser(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        className={
          isEditing
            ? 'absolute top-0 left-0 flex items-center justify-center w-full bg-slate-200'
            : 'hidden'
        }
      >
        <div className={isEditing ? 'block' : 'hidden'}>
          <EditUser
            currentId={id}
            currentEmail={email}
            currentName={name}
            currentPhone={phone}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
          />
        </div>
      </div>
    </>
  );
};

export default User;
