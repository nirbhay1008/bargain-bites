import {getApp , getApps , initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA-CacedzT9DfXwdQy_0xVmrPFwD3Pfsd8",
    authDomain: "bargainbites-621a4.firebaseapp.com",
    databaseURL: "https://bargainbites-621a4-default-rtdb.firebaseio.com",
    projectId: "bargainbites-621a4",
    storageBucket: "bargainbites-621a4.appspot.com",
    messagingSenderId: "910219107668",
    appId: "1:910219107668:web:4582ed1d6725b6eb71fcc1",
    measurementId: "G-X5GTC33ECS"
  };

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)


export {app , firestore , storage};