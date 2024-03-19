import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCOMKc-ZABGonJB25PhiM31oEKtiOXQwvI",
  authDomain: "react-olx-2f20b.firebaseapp.com",
  projectId: "react-olx-2f20b",
  storageBucket: "react-olx-2f20b.appspot.com",
  messagingSenderId: "843918114336",
  appId: "1:843918114336:web:07b7f65c36156d24478645",
  measurementId: "G-9M2XZKLY7T"
};
  export default firebase.initializeApp(firebaseConfig)