import React from 'react';
import Package from '../components/Package';
const searchPackage = () => {
  return (
    <div className='m-10'>
      <div className='flex justify-between'>
        <h2>Search for your package</h2>
        <h3 className='hover:underline cursor-pointer'>Logout</h3>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[1000px] h-[50px] bg-slate-300 rounded my-10'>
          <input
            type='text'
            className='w-full h-full border-4 px-4 border-slate-300 rounded'
            placeholder='Search for your package'
          />
        </div>
        <div className='grid grid-cols-2 gap-10'>
          <Package></Package>
          <Package></Package>
          <Package></Package>
          <Package></Package>
        </div>
      </div>
    </div>
  );
};

export default searchPackage;
