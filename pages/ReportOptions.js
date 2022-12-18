import React from 'react';
import Link from 'next/link';
import Box from '../components/Box';

const ReportOptions = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center space-x-12'>
      <Link href='/DamagedPackages'>
        <Box text='List all damaged packages'></Box>
      </Link>
      <Link href='/RiyadhPackages'>
        <Box text='List all packages that are in Riyadh'></Box>
      </Link>
    </div>
  );
};

export default ReportOptions;
