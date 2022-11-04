
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBA0pUFu0QmjyxtbyoXbyod-pe6RLT5YpQ",
  authDomain: "bufandasfutboleras.firebaseapp.com",
  projectId: "bufandasfutboleras",
  storageBucket: "bufandasfutboleras.appspot.com",
  messagingSenderId: "319767552830",
  appId: "1:319767552830:web:737e0f866f7616cef5026f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)