import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";
import googleIcon from "../../Images/Login/google.png";
import useTitle from "../../Hooks/useTitle";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

// Login Page
const Login = () => {
  useTitle("Login");
  const { signInUsingGoogle, setIsLoading, setUser, signInUsingEmail } =
    useFirebase();

  const location = useLocation();
  const history = useHistory();
  const locationURL = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(locationURL);
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailSignIn = (e) => {
    signInUsingEmail(email, password);
    history.push(locationURL);
    e.preventDefault();
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="login-body">
        <div className="login-container">
          <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleEmailSignIn}>
              <label>
                Username or Email Address
                <input
                  type="text"
                  placeholder="abc@xyz.com"
                  onBlur={handleEmailChange}
                  required
                ></input>
              </label>

              <label>
                Password
                <input
                  type="password"
                  placeholder="Password"
                  onBlur={handlePasswordChange}
                  required
                ></input>
              </label>
              <button type="submit" className="primary-button">
                Login
              </button>
            </form>
            <br />
            <p>
              Don't have an account?{" "}
              <Link className="create-an-account-text" to="/register">
                Create an account
              </Link>
            </p>
            <div className="google-login">
              <p>OTHER SIGN IN METHODS</p>
              <button onClick={handleGoogleSignIn} className="primary-button">
                {/* Sign In Using Google */}
                <img src={googleIcon} alt="google"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
