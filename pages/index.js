import Link from 'next/link';
import Button from '../components/Button';
import { db } from '../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const userCollection = await getDocs(userCollectionRef);
      setUsers(
        userCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getUsers();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full space-y-4'>
      <h1>Login</h1>
      <div className='py-4'>
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
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='border-2 rounded'
          />
        </div>
      </div>
      <Link href='/mainCustomer'>
        <Button text='Login'></Button>
      </Link>
      <p>
        Dont have an account?{' '}
        <u className='cursor-pointer'>
          <Link href='/registerOption'>Register</Link>
        </u>
      </p>
    </div>
  );
}
