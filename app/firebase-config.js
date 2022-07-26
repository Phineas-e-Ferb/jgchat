import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtYcvdtaIubKVdUjaFGG3c0HrApeSlX6w",
  authDomain: "jgchat-88926.firebaseapp.com",
  projectId: "jgchat-88926",
  storageBucket: "jgchat-88926.appspot.com",
  messagingSenderId: "1063280892885",
  appId: "1:1063280892885:web:be0246a427e4ddc88c7b5c",
  measurementId: "G-58QJ5LT1LY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const SingUp = async (email, password) => {
    const auth = getAuth();
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential)
        return userCredential.user;
    }catch (e){
        console.log(e);
    }
} 