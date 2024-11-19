// src/components/Login.jsx
import React, { useState } from "react";
import { auth } from "../FirebaseConfig"; // Import the configured Firebase
import UclaNavbar from '../component/UclaNavbar';
import './Login.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      navigate("/dashboard"); // Redirect to the dashboard after login
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user signed in:", result.user);
      navigate("/dashboard"); // Redirect to the dashboard after Google login
    } catch (error) {
      setError("Failed to log in with Google.");
    }
  };

  return (
    <div>
      <UclaNavbar />
      <div className="login-container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
          <form onSubmit={handleLogin}>
            <h3>Login Here</h3>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <button type="submit">Log In</button>

            <button type="button">Sign Up</button>

            <div className="social">
              <h4>Or login with:</h4>
              <button className="google" type="button" onClick={handleGoogleLogin}>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;