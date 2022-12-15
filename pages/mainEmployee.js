import React from 'react';
import Box from '../components/Box';
const mainEmployee = () => {
  return (
    <div className='m-10'>
      <div className='flex justify-between'>
        <h2>Welcome Customer!</h2>
        <h3 className='hover:underline cursor-pointer'>Logout</h3>
      </div>
      <div className='py-12 space-y-4'>
        <div className='flex justify-center space-x-4'>
          <Box text={'Add/Remove/Edit package information'}></Box>
          <Box text={'Add/Remove/Edit user information'}></Box>
          <Box text={'Generate reports'}></Box>
        </div>
        <div className='flex justify-center space-x-4'>
          <Box text={'Trace back packages'}></Box>
          <Box text={'Send Notifications'}></Box>
        </div>
      </div>
    </div>
  );
};

export default mainEmployee;
