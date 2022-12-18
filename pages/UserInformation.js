import React from 'react';
import User from '../components/User';
import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
const UserInformation = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUsers(users);
    });
    return unsubscribe;
  }, []);

  return (
    <div className='m-10'>
      <div className='flex justify-between p-5'>
        <h2>Add/Remove/Edit user information</h2>
        <h3 className='hover:underline cursor-pointer'>Logout</h3>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='grid grid-cols-2 gap-10'>
          {users.map((u) => (
            <User
              key={u.id}
              id={u.id}
              email={u.email}
              isCustomer={u.isCustomer}
              name={u.name}
              phone={u.phone}
              packages={u.packages}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
