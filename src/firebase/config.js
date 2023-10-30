import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAsJslIZcC5St6InIKACkIU9XPlKVliSwI",
  authDomain: "the-souled-store-54953.firebaseapp.com",
  projectId: "the-souled-store-54953",
  storageBucket: "the-souled-store-54953.appspot.com",
  messagingSenderId: "740096061969",
  appId: "1:740096061969:web:acbb6ef2029d46274e37b0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
