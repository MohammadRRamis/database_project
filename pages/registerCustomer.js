import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const RegisterCustomer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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
          action={() => {
            createUserWithEmailAndPassword(email, password);
            console.log(email, password);
          }}
        ></Button>
      </Link>
    </div>
  );
};

export default RegisterCustomer;
