import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDE0eXRL9QxX5rpFiHopMfkbzDmjIGA8qg",
    authDomain: "olx-clone-60dc8.firebaseapp.com",
    projectId: "olx-clone-60dc8",
    storageBucket: "olx-clone-60dc8.appspot.com",
    messagingSenderId: "1033759754953",
    appId: "1:1033759754953:web:ec098995d8d20e993f9b18",
    measurementId: "G-W19G5W4PKM"
  };

  export default firebase.initializeApp(firebaseConfig)