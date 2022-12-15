// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3Ay0tafYjxpqeWZRLRzltGf7_brqslRg',
  authDomain: 'database-project-48bce.firebaseapp.com',
  projectId: 'database-project-48bce',
  storageBucket: 'database-project-48bce.appspot.com',
  messagingSenderId: '407073120158',
  appId: '1:407073120158:web:f8b7d9534fbd2d5469008f',
  measurementId: 'G-FP956VYPPB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
