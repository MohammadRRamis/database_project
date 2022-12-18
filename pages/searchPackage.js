import React from 'react';
import Package from '../components/Package';
import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const SearchPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Packge'));
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
          {packages.map((p) => (
            <Package key={p.value} isCustomer={true} status={p.status} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPackage;
