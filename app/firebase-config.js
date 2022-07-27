import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtYcvdtaIubKVdUjaFGG3c0HrApeSlX6w",
  authDomain: "jgchat-88926.firebaseapp.com",
  projectId: "jgchat-88926",
  storageBucket: "jgchat-88926.appspot.com",
  messagingSenderId: "1063280892885",
  appId: "1:1063280892885:web:be0246a427e4ddc88c7b5c",
  measurementId: "G-58QJ5LT1LY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const signUp = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const response = await addDoc(collection(db, "user"), {
      name,
      email,
    });
    console.log(response);
    return userCredential.user;
  } catch (e) {
    console.log(e);
  }
};

export const signIn = async (email, password) => {
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential);
  }catch (e){
    console.log(e);
  }
}