import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzwLf7S-UAb0Fr7ZtX1vEiRwvEm0C9ZDE",
  authDomain: "reelviewmedia-d1049.firebaseapp.com",
  projectId: "reelviewmedia-d1049",
  storageBucket: "reelviewmedia-d1049.firebasestorage.app",
  messagingSenderId: "627239683017",
  appId: "1:627239683017:web:8723498960ab6dab19de18",
  measurementId: "G-EW10G5CDLC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Logged in as:", user.displayName);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
  }
};
