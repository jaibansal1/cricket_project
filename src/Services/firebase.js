import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5wQgqLLDBfeHMua4DU1sGgOCotAVqFFA",
  authDomain: "cricket-project-69765.firebaseapp.com",
  projectId: "cricket-project-69765",
  storageBucket: "cricket-project-69765.appspot.com",
  messagingSenderId: "873352753867",
  appId: "1:873352753867:web:0dbeea3271126c8cc0e14e",
  measurementId: "G-F6X3JZRY4R",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    // await setDoc(doc(db, "admin", "jx6DwAMWMeUDzWMyMD1V" ), {
    //   name: "Abir",
    //     grade: "11",
    //   role: "hello"
    // },
    //   {merge: true
    // })
  } catch (err) {
    console.error(err);
    var errorCode = err.code;
    var errorMessage = err.message;

    if (errorCode === "auth/user-not-found") {
      alert(
        "No user exists with this email address. Try creating a new account!"
      );
    } else if (errorCode === "auth/invalid-email") {
      alert("Please enter a valid email address.");
    } else if (errorCode === "auth/wrong-password") {
      alert("Incorrect Password.");
    } else {
      alert(errorMessage);
    }
    console.log(err);
  }
};

const register = async (
  name,
  email,
  accountType,
  password,
  t20Innings,
  t20Runs,
  t20Average,
  t20HS,
  t12Innings,
  t12Runs,
  t12Average,
  t12HS,
  PracticeInnings,
  PracticeRuns,
  PracticeAverage,
  PracticeHS,
  bat,
  bowl,
  grade,
  image,
  bio,
  role
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const docRef = await addDoc(collection(db, accountType), {
      uid: user.uid,
      name,
      email,
      accountType,
      t20Innings,
      t20Runs,
      t20Average,
      t20HS,
      t12Innings,
      t12Runs,
      t12Average,
      t12HS,
      PracticeInnings,
      PracticeRuns,
      PracticeAverage,
      PracticeHS,
      bat,
      bowl,
      grade,
      image,
      bio,
      role,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", err);
    var errorCode = err.code;
    var errorMessage = err.message;
    if (errorCode === "auth/weak-password") {
      alert(
        "The password is too weak. Password must be at least 6 characters!"
      );
    } else if (errorCode === "auth/invalid-email") {
      alert("Please enter a valid email address.");
    } else if (errorCode === "auth/email-already-in-use") {
      alert("Account already exists with this email.");
    } else if (errorCode === "auth/missing-email") {
      alert("Please enter an email address.");
    } else {
      alert(errorMessage);
    }
    console.log(err);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    var errorCode = err.code;
    var errorMessage = err.message;
    if (errorCode === "auth/invalid-email") {
      alert("Please enter a valid email address.");
    } else if (errorCode === "auth/user-not-found") {
      alert(
        "No user exists with this email address. Try creating a new account!"
      );
    } else {
      alert(errorMessage);
    }
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signIn,
  signInWithEmailAndPassword,
  register,
  resetPassword,
  logout,
};
