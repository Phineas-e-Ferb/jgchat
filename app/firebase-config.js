import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import sort_messages from './utils/sort_messages'

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
    return userCredential.user;
  } catch (e) {
    console.log(e);
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (e) {
    console.log(e);
  }
};

export const listCollection = async (collectionName) => {
  try {
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return docs;
  } catch (e) {
    console.log(e);
  }
};

export const sendMessage = async (message, receiverEmail, senderEmail) => {
  try {
    const response = await addDoc(collection(db, "message"), {
      message,
      receiverEmail,
      senderEmail,
      senderTime: Date.now(),
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfo = async (userEmail) => {
  try {
    const q = query(collection(db, "user"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0].data();
    return doc;
  } catch (e) {
    console.log(e);
  }
};

export const getConversationMessages = async (
  currentUserEmail,
  conversationUserEmail
) => {
  try {
    const q = query(
      collection(db, "message"),
      where("senderEmail", "in", [currentUserEmail, conversationUserEmail]),
    );
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    const filteredDocs = docs.filter(doc => {
      if (doc.receiverEmail === conversationUserEmail || doc.receiverEmail === currentUserEmail)
        return doc
    }).sort(sort_messages)
    return filteredDocs;
  } catch (e) {
    console.log(e);
  }
};
