import React from 'react';

const Package = ({
  isCustomer,
  packageId,
  weight,
  dimensions,
  value,
  companyPayment,
  insuranceAmount,
  destination,
  finalDeliveryDate,
  category,
  status,
}) => {
  return (
    <div>
      <div className='flex flex-col p-5 space-y-4 w-[400px] bg-slate-300'>
        <p>Package Id: {packageId}</p>
        <p>Customer Email:</p>
        <div className='border-y-2 rounded border-slate-500'></div>
        <p>Weight: {weight}</p>
        <p>Dimensions: {dimensions}</p>
        <div className='border-y-2 rounded border-slate-500'></div>
        <p>Value: {value}</p>
        <p>Company Payment: {companyPayment}</p>
        <p>Insurance Amount: {insuranceAmount}</p>
        <div className='border-y-2 rounded border-slate-500'></div>
        <p>Destination: {destination}</p>
        <p>Final Delivery Date: {finalDeliveryDate}</p>
        <div className='border-y-2 rounded border-slate-500'></div>
        <p>Category: {category}</p>
        <p>
          Status: <span>{status}</span>
        </p>
        <div className='border-y-2 rounded border-slate-500'></div>
        <p>Location Type:</p>
        <p>Location Name:</p>
        <div className='border-y-2 rounded border-slate-500'></div>
        <p>Transportation Type:</p>
        <p>Schedule Number:</p>
        <div className='border-y-2 rounded border-slate-500'></div>
        <p>Retail Center Type:</p>
        <p>Retail Center Name:</p>
      </div>
      <div>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>
          {isCustomer ? 'Send' : 'Edit'}
        </button>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>
          {isCustomer ? 'Receive' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default Package;
