import React from 'react';

const Box = ({ text }) => {
  return (
    <div className='w-[300px] h-[300px] hover:bg-blue-400 bg-blue-200 transition-all duration-300 cursor-pointer flex justify-center items-center text-center'>
      <h4>{text}</h4>
    </div>
  );
};

export default Box;
