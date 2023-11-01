import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAv9Oa8wJaBXXOLSKnKpv3U-lCjRlvXOGk',
  authDomain: 'expensetracker-e0fde.firebaseapp.com',
  projectId: 'expensetracker-e0fde',
  storageBucket: 'expensetracker-e0fde.appspot.com',
  messagingSenderId: '435009027025',
  appId: '1:435009027025:web:229822d157bbfc81993ef0',
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const firestore = getFirestore()
