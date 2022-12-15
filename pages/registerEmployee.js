import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
const RegisterEmployee = () => {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <h1>Register Employee</h1>
      <div className='py-8'>
        <div className='flex flex-col'>
          <label htmlFor='id'>Id</label>
          <input type='text' name='id' id='id' className='border-2 rounded' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            className='border-2 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            className='border-2 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='Phone'>Phone Number</label>
          <input
            type='text'
            name='phone'
            id='phone'
            className='border-2 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='border-2 rounded'
          />
        </div>
      </div>
      <Link href='/'>
        <Button text='Register'></Button>
      </Link>
    </div>
  );
};

export default RegisterEmployee;
