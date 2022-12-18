import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
const EditPackage = ({
  isEditing,
  setIsEditing,
  currentId,
  currentEmail,
  currentWeight,
  currentDimensions,
  currentValue,
  currentCompanyPayment,
  currentInsuranceAmount,
  currentDestination,
  currentFinalDeliveryDate,
  currentCategory,
  currentStatus,
  currentLocationType,
  currentLocationName,
  currentTransportationType,
  currentScheduleNumber,
  currentRetailCenterType,
  currentRetailCenterName,
}) => {
  const [email, setEmail] = useState(currentEmail);
  const [weight, setWeight] = useState(currentWeight);
  const [dimensions, setDimensions] = useState(currentDimensions);
  const [value, setValue] = useState(currentValue);
  const [companyPayment, setCompanyPayment] = useState(currentCompanyPayment);
  const [insuranceAmount, setInsuranceAmount] = useState(
    currentInsuranceAmount
  );
  const [destination, setDestination] = useState(currentDestination);
  const [finalDeliveryDate, setFinalDeliveryDate] = useState(
    currentFinalDeliveryDate
  );
  const [category, setCategory] = useState(currentCategory);
  const [status, setStatus] = useState(currentStatus);
  const [locationType, setLocationType] = useState(currentLocationType);
  const [locationName, setLocationName] = useState(currentLocationName);
  const [transportationType, setTransportationType] = useState(
    currentTransportationType
  );
  const [scheduleNumber, setScheduleNumber] = useState(currentScheduleNumber);
  const [retailCenterType, setRetailCenterType] = useState(
    currentRetailCenterType
  );
  const [retailCenterName, setRetailCenterName] = useState(
    currentRetailCenterName
  );

  const editPackage = async (
    id,
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
    scheduleNumber,
    retailCenterType,
    retailCenterName
  ) => {
    try {
      await updateDoc(doc(db, 'packages', id), {
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
        scheduleNumber,
        retailCenterType,
        retailCenterName,
      });
      console.log('Document edited successfully!');
    } catch (e) {
      console.error('Error editing document: ', e);
    }
  };

  return (
    <div className={isEditing ? 'block' : 'hidden'}>
      <div className='flex flex-col h-screen w-full justify-center items-center'>
        <h1>Edit Package Information</h1>
        <div className='py-8'>
          <div className='flex flex-col'>
            <label>Customer Email</label>
            <input
              className='border-2 rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Weight</label>
            <input
              className='border-2 rounded'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Dimensions</label>
            <input
              className='border-2 rounded'
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Value</label>
            <input
              className='border-2 rounded'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Company Payment</label>
            <input
              className='border-2 rounded'
              value={companyPayment}
              onChange={(e) => setCompanyPayment(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Insurance Amount:</label>
            <input
              className='border-2 rounded'
              value={insuranceAmount}
              onChange={(e) => setInsuranceAmount(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Destination:</label>
            <input
              className='border-2 rounded'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Final Delivery Date:</label>
            <input
              className='border-2 rounded'
              value={finalDeliveryDate}
              onChange={(e) => setFinalDeliveryDate(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Category:</label>
            <input
              className='border-2 rounded'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Status:</label>
            <input
              className='border-2 rounded'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Location Type:</label>
            <input
              className='border-2 rounded'
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Location Name:</label>
            <input
              className='border-2 rounded'
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Transportation Type:</label>
            <input
              className='border-2 rounded'
              value={transportationType}
              onChange={(e) => setTransportationType(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Schedule Number:</label>
            <input
              className='border-2 rounded'
              value={scheduleNumber}
              onChange={(e) => setScheduleNumber(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Retail Center Type:</label>
            <input
              className='border-2 rounded'
              value={retailCenterType}
              onChange={(e) => setRetailCenterType(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Retail Center Name:</label>
            <input
              className='border-2 rounded'
              value={retailCenterName}
              onChange={(e) => setRetailCenterName(e.target.value)}
            />
          </div>
        </div>
        <Link href='/PackageInformation'>
          <Button
            text='Confirm'
            action={async () => {
              await editPackage(
                currentId,
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
                scheduleNumber,
                retailCenterType,
                retailCenterName
              );
              await setIsEditing(false);
            }}
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default EditPackage;
