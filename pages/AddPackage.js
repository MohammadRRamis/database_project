import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
const AddPackage = () => {
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [value, setValue] = useState('');
  const [companyPayment, setCompanyPayment] = useState('');
  const [insuranceAmount, setInsuranceAmount] = useState('');
  const [destination, setDestination] = useState('');
  const [finalDeliveryDate, setFinalDeliveryDate] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [locationType, setLocationType] = useState('');
  const [locationName, setLocationName] = useState('');
  const [transportationType, setTransportationType] = useState('');
  const [ScheduleNumber, setScheduleNumber] = useState('');
  const [retailCenterType, setRetailCenterType] = useState('');
  const [retailCenterName, setRetailCenterName] = useState('');

  const packagesCollectionRef = collection(db, 'package');
  const createPackage = async (
    email,
    weight,
    dimensions,
    value,
    companyPayment,
    insuranceAmount,
    destination,
    finalDeliveryDate,
    category,
    status,
    locationType,
    locationName,
    transportationType,
    ScheduleNumber,
    retailCenterType,
    retailCenterName
  ) => {
    try {
      const docRef = await addDoc(packagesCollectionRef, {
        packageId: Math.floor(Math.random() * 1000000000),
        email,
        weight,
        dimensions,
        value,
        companyPayment,
        insuranceAmount,
        destination,
        finalDeliveryDate,
        category,
        status,
        locationType,
        locationName,
        transportationType,
        ScheduleNumber,
        retailCenterType,
        retailCenterName,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <h1>Add Package</h1>
      <div className='py-8'>
        <div className='flex flex-col'>
          <label>Customer Email</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Weight</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Dimensions</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setDimensions(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Value</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Company Payment</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setCompanyPayment(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Insurance Amount:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setInsuranceAmount(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Destination:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Final Delivery Date:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setFinalDeliveryDate(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Category:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Status:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Location Type:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setLocationType(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Location Name:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setLocationName(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Transportation Type:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setTransportationType(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Schedule Number:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setScheduleNumber(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Retail Center Type:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setRetailCenterType(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Retail Center Name:</label>
          <input
            className='border-2 rounded'
            onChange={(e) => setRetailCenterName(e.target.value)}
          />
        </div>
      </div>
      <Link href='/PackageInformation'>
        <Button
          text='Confirm'
          action={async () =>
            await createPackage(
              email,
              weight,
              dimensions,
              value,
              companyPayment,
              insuranceAmount,
              destination,
              finalDeliveryDate,
              category,
              status,
              locationType,
              locationName,
              transportationType,
              ScheduleNumber,
              retailCenterType,
              retailCenterName
            )
          }
        ></Button>
      </Link>
    </div>
  );
};

export default AddPackage;
