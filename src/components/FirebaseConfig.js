import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBxDBbM9rV1lHYXftLcqt3uwDFwo181H04",
  authDomain: "kulony-5f1ef.firebaseapp.com",
  projectId: "kulony-5f1ef",
  storageBucket: "kulony-5f1ef.appspot.com",
  messagingSenderId: "50655501627",
  appId: "1:50655501627:web:7495323b7559c9a7986b1e",
  measurementId: "G-BPQ130W12B",
})

// Firebase storage reference
const storage = getStorage(app)
export default storage
