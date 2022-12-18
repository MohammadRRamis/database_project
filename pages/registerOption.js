import React from 'react';
import Link from 'next/link';
import Box from '../components/Box';
const registerOption = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center space-x-12'>
      <Link href='/RegisterEmployee'>
        <Box text='Register as an Administration/Employee'></Box>
      </Link>
      <Link href='/RegisterCustomer'>
        <Box text='Register as a Customer'></Box>
      </Link>
    </div>
  );
};

export default registerOption;
