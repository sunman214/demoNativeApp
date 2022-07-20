import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyBkfvFjfzQxiCbU9DJTPnJWVh8GcJ-DY2E',
  authDomain: 'test-chat-online-7c160.firebaseapp.com',
  databaseURL:
    'https://test-chat-online-7c160-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'test-chat-online-7c160',
  storageBucket: 'test-chat-online-7c160.appspot.com',
  appId: '1:457603611771:android:6e354125cfe43cfdaa36de',
  messagingSenderId: '457603611771'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();
debugger;
export {auth, firebaseDatabase, app};
