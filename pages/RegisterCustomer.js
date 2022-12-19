import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const RegisterCustomer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const usersCollectionRef = collection(db, 'users');

  const createUser = async (id, email, name, phone, isCustomer) => {
    try {
      const docRef = await addDoc(usersCollectionRef, {
        id,
        email,
        name,
        phone,
        isCustomer,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  if (error) {
    console.log(error);
  }
  if (loading) {
    console.log(loading);
  }
  if (user) {
    console.log(user.user.email);
  }

  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <h1>Register Customer</h1>
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
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            className='border-2 rounded'
            onChange={(e) => setEmail(e.target.value)}
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
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='border-2 rounded'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Link href='/'>
        <Button
          text='Register'
          action={async () => {
            await createUserWithEmailAndPassword(email, password);
            await createUser(auth.currentUser?.uid, email, name, phone, true);
          }}
        ></Button>
      </Link>
    </div>
  );
};

export default RegisterCustomer;
