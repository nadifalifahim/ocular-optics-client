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
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
        saveUser(result.user.email, result.user.displayName, "PUT");
        const locationURL = location?.state?.from || "/home";
        history.push(locationURL);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(setIsLoading(false));
  };

  const registerUsingEmailandPassword = (
    name,
    email,
    password,
    location,
    history
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        saveUser(email, name, "POST");
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, { displayName: name });
        const locationURL = location.state?.from || "/home";
        history.push(locationURL);
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

  const signInUsingEmail = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        const locationURL = location.state?.from || "/home";
        history.push(locationURL);
      })
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

  useEffect(() => {
    fetch(`https://ocular-optics.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data.admin);
      });
  }, [user.email]);

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
    const userData = { email, displayName };
    console.log(userData);
    fetch("https://ocular-optics.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then();
  };

  return {
    user,
    admin,
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
