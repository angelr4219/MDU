// src/components/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig"; // Import the configured Firebase
import UclaNavbar from '../component/UclaNavbar';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      // Redirect or do something after successful login
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
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
              <div className="go">
                {/* Social login buttons */}
                <button className="google"> Google</button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;