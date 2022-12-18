import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
const EditUser = ({
  isEditing,
  setIsEditing,
  currentId,
  currentEmail,
  currentName,
  currentPhone,
}) => {
  const [email, setEmail] = useState(currentEmail);
  const [name, setName] = useState(currentName);
  const [phone, setPhone] = useState(currentPhone);

  const editUser = async (email, name, phone) => {
    try {
      await updateDoc(doc(db, 'users', currentId), {
        email,
        name,
        phone,
      });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className={isEditing ? 'block' : 'hidden'}>
      <div className='flex flex-col h-screen w-full justify-center items-center'>
        <h1>Edit User Information</h1>
        <div className='py-8'>
          <div className='flex flex-col'>
            <label>Email</label>
            <input
              className='border-2 rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Name</label>
            <input
              className='border-2 rounded'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Phone</label>
            <input
              className='border-2 rounded'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <Link href='/UserInformation'>
          <Button
            text='Confirm'
            action={async () => {
              await editUser(email, name, phone);
              await setIsEditing(false);
            }}
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default EditUser;
