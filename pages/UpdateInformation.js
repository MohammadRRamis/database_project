import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import { auth } from 'firebase/auth';
import { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const UpdateInformation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const updateUserInformation = async (name, phone) => {
    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        name,
        phone,
      });
      console.log('Document written with ID: ');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <h1>Update personal information</h1>
      <div className='py-8'>
        <div className='flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            className='border-2 rounded'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='Phone'>Phone Number</label>
          <input
            type='text'
            name='phone'
            id='phone'
            className='border-2 rounded'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <Link href='/Main'>
        <Button
          text='Confirm'
          action={async () => {
            await updateUserInformation(name, phone);
          }}
        ></Button>
      </Link>
    </div>
  );
};

export default UpdateInformation;
