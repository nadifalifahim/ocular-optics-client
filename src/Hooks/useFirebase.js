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
  const [authError, setAuthError] = useState("");

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result?.user.email);
        // const googleuser = result.user;
        // saveUser(googleuser.email, googleuser.displayName, "PUT");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(setIsLoading(false));
  };

  const registerUsingEmailandPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, { displayName: name });
        saveUser(email, name, "POST");
        verifyEmail();
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {})
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const signInUsingEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {})
      .catch((error) => {
        setAuthError(error.message);
      });
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

  const saveUser = (email, displayName, method) => {
    const saveUser = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveUser),
    }).then();
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
    authError,
  };
};

export default useFirebase;
