import React from 'react';
import { useState } from 'react';
import { doc, deleteDoc , updateDoc, collection, query, onSnapshot, where, arrayUnion} from 'firebase/firestore';
import { db } from '../firebase';
import EditPackage from './EditPackage';

const Package = ({
  isCustomer,
  packageId,
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
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState('');
const users =[];
  const deletePackage = async (id) => {
    try {
      await deleteDoc(doc(db, 'packages', id));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

    const sendPackage = async (packageId) => {
      const q = query(collection(db, 'users'), where('email', '==', receiverEmail));

      await onSnapshot (q, (querySnapshot) => {
      querySnapshot.forEach( async (document) => {
      users.push({ ...document.data(), id: document.id });
      try{
        console.log(users[0].email);
        // let packages = users[0].packages;
        let pkgArray =[];
        // packages[(users[0].package)] = packageId;
        let i = 0;
        for(let pkg in users[0].packages ){
          pkgArray[i] = pkg;
          i++;;
        }
        pkgArray[i] = packageId;
        await updateDoc(doc(db, 'packages', packageId), {'email': receiverEmail});
        // await updateDoc(doc(db, 'users', users[0].id), {'packages': packageId});
        await updateDoc(doc(db, 'users', users[0].id), {'packages': arrayUnion(packageId) });
        


        console.log('Package is about to be sent...')
      }catch(e){
        console.log(e);
        console.log("Failed!");
      }
 
    });
    
  })
  
};

  

  return (
    <>
      <div className={isEditing ? 'hidden' : 'block'}>
        <div className='flex flex-col p-5 space-y-4 w-[400px] bg-slate-300'>
          <p>
            Package Id: <span>{packageId}</span>
          </p>
          <p>
            Customer Email: <span>{email}</span>
          </p>
          <div className='border-y-2 rounded border-slate-500'></div>
          <p>
            Weight:
            <span>{weight}</span>
          </p>
          <p>
            Dimensions: <span>{dimensions}</span>
          </p>
          <div className='border-y-2 rounded border-slate-500'></div>
          <p>
            Value: <span>{value}</span>
          </p>
          <p>
            Company Payment: <span>{companyPayment}</span>
          </p>
          <p>
            Insurance Amount: <span>{insuranceAmount}</span>
          </p>
          <div className='border-y-2 rounded border-slate-500'></div>
          <p>
            Destination: <span>{destination}</span>
          </p>
          <p>
            Final Delivery Date: <span> {finalDeliveryDate}</span>
          </p>
          <div className='border-y-2 rounded border-slate-500'></div>
          <p>
            Category: <span>{category}</span>
          </p>
          <p>
            Status: <span>{status}</span>
          </p>
          <div className='border-y-2 rounded border-slate-500'></div>
          <p>
            Location Type: <span>{locationType}</span>{' '}
          </p>
          <p>
            Location Name: <span>{locationName}</span>
          </p>
          <div className='border-y-2 rounded border-slate-500'></div>
          <p>
            Transportation Type: <span>{transportationType}</span>
          </p>
          <p>
            Schedule Number: <span>{scheduleNumber}</span>
          </p>
          <div className='border-y-2 rounded border-slate-500'></div>
          <p>
            Retail Center Type: <span>{retailCenterType}</span>
          </p>
          <p>
            Retail Center Name: <span>{retailCenterName}</span>
          </p>
        </div>
        <div>
          <button
            className={
              'bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
            }
            onClick={
              isCustomer
                ? () => {
                  setIsSending(!isSending)
                  // unsubscribe(packageId);
                }
                : () => setIsEditing(!isEditing)
            }
          >
            {isCustomer ? 'Send' : 'Edit'}
          </button>
          <button
            className={
              isCustomer
                ? 'hidden'
                : 'bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
            }
            onClick={() => deletePackage(packageId)}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        className={
          isEditing
            ? 'absolute top-0 left-0 flex items-center justify-center w-full bg-slate-200'
            : 'hidden'
        }
      >
        <EditPackage
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          currentId={packageId}
          currentEmail={email}
          currentWeight={weight}
          currentDimensions={dimensions}
          currentValue={value}
          currentCompanyPayment={companyPayment}
          currentInsuranceAmount={insuranceAmount}
          currentDestination={destination}
          currentFinalDeliveryDate={finalDeliveryDate}
          currentCategory={category}
          currentStatus={status}
          currentLocationType={locationType}
          currentLocationName={locationName}
          currentTransportationType={transportationType}
          currentScheduleNumber={scheduleNumber}
          currentRetailCenterType={retailCenterType}
          currentRetailCenterName={retailCenterName}
        />
      </div>
      <div
        className={
          isSending
            ? 'absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-slate-200 flex-col space-y-4'
            : 'hidden'
        }
      >
        <h2>Receiver Email</h2>
        <input
          className='border-2 rounded'
          onChange={(e) => setReceiverEmail(e.target.value)}
        />
        <button
          className={
            'bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
          }
          onClick={async () => {
            await sendPackage(packageId);
            setIsSending(!isSending);
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Package;
