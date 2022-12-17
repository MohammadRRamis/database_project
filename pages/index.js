import Link from 'next/link';
import Button from '../components/Button';
import { useState } from 'react';
import { auth } from '../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

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
            onChange={(e) => setEmail(e.target.value)}
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
      <Link href='/mainCustomer'>
        <Button
          text='Login'
          action={() => signInWithEmailAndPassword(email, password)}
        ></Button>
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
