
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB1SIQKAt8X56GlhXZ-wrwdURDHVunZlaI',
  authDomain: 'club-ecommerce-a93fc.firebaseapp.com',
  projectId: 'club-ecommerce-a93fc',
  storageBucket: 'club-ecommerce-a93fc.appspot.com',
  messagingSenderId: '48829518400',
  appId: '1:48829518400:web:4fd5f273f44dd84be0c5a5'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
