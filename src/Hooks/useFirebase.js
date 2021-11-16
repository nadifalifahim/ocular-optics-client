import { useEffect, useState } from "react";
import initializeFirebase from "../Authentication/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const useFirebase = () => {
  initializeFirebase();

  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const registerUsingEmailandPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      updateProfile(auth.currentUser, { displayName: name });
      verifyEmail();
    });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };

  const signInUsingEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        console.log("Signed Out");
      })
      .catch(() => {
        console.log("Couldn't sign out");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading,
    setUser,
    registerUsingEmailandPassword,
    signInUsingEmail,
  };
};

export default useFirebase;
