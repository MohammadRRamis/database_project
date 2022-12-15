import React from 'react';
import Box from '../components/Box';
import Link from 'next/link';
const mainCustomer = () => {
  return (
    <div className='m-10'>
      <div className='flex justify-between'>
        <h2>Welcome Customer!</h2>
        <h3 className='hover:underline cursor-pointer'>Logout</h3>
      </div>
      <div className='py-12 space-y-4'>
        <div className='flex justify-center space-x-4'>
          <Link href='/searchPackage'>
            <Box text={'Search for your package'}></Box>
          </Link>
          <Box text={'Send/receive package'}></Box>
          <Box text={'Update personal information'}></Box>
        </div>
        <div className='flex justify-center space-x-4'>
          <Box text={'Do payment'}></Box>
          <Box text={'Traceback package (Status Mode)'}></Box>
        </div>
      </div>
    </div>
  );
};

export default mainCustomer;
