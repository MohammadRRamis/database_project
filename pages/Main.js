import React from 'react';
import Box from '../components/Box';
import Link from 'next/link';
import { auth } from '../firebase';
import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Main = () => {
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      users.forEach((user) => {
        if (user.email === auth.currentUser.email) {
          setIsCustomer(user.isCustomer);
          console.log(isCustomer);
        }
      });
    });
    return unsubscribe;
  }, [isCustomer]);

  return (
    <div className='m-10'>
      <div className='flex justify-between'>
        <h2>Welcome {auth.currentUser.email}!</h2>
        <h3 className='hover:underline cursor-pointer'>Logout</h3>
      </div>
      <div className='py-12 space-y-4'>
        <div className='flex justify-center space-x-4'>
          <Link href={isCustomer ? '/SearchPackage' : '/PackageInformation'}>
            <Box
              text={
                isCustomer
                  ? 'Search for your package'
                  : 'Add/Remove/Edit package information'
              }
            ></Box>
          </Link>
          <Link href={isCustomer ? '/' : '/'}>
            <Box
              text={
                isCustomer
                  ? 'Send/receive package'
                  : 'Add/Remove/Edit user information'
              }
            ></Box>
          </Link>
          <Link href={isCustomer ? '/' : '/'}>
            <Box
              text={
                isCustomer ? 'Update personal information' : 'Generate reports'
              }
            ></Box>
          </Link>
        </div>
        {/* <div className='flex justify-center space-x-4'>
          <Box text={'Do payment'}></Box>
          <Box text={'Traceback package (Status Mode)'}></Box>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
