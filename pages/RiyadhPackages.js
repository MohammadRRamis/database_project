import React from 'react';
import Package from '../components/Package';
import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { db } from '../firebase';
import Link from 'next/link';

const RiyadhPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'packages'),
      where('destination', '==', 'Riyadh')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const packages = [];
      querySnapshot.forEach((doc) => {
        packages.push({ ...doc.data(), id: doc.id });
      });
      setPackages(packages);
    });
    return unsubscribe;
  }, []);

  return (
    <div className='m-10'>
      <div className='flex justify-between'>
        <h2>Packages in Riyadh</h2>
        <h3 className='hover:underline cursor-pointer'>Logout</h3>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='grid grid-cols-2 gap-10'>
          {packages.map((p) => (
            <Package
              key={p.value}
              isCustomer={false}
              packageId={p.id}
              email={p.email}
              weight={p.weight}
              dimensions={p.dimensions}
              value={p.value}
              companyPayment={p.companyPayment}
              insuranceAmount={p.insuranceAmount}
              destination={p.destination}
              finalDeliveryDate={p.finalDeliveryDate}
              category={p.category}
              status={p.status}
              locationType={p.locationType}
              locationName={p.locationName}
              transportationType={p.transportationType}
              scheduleNumber={p.scheduleNumber}
              retailCenterType={p.retailCenterType}
              retailCenterName={p.retailCenterName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiyadhPackages;
