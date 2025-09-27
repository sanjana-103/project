import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { Backendurl } from '../App';
import { ToastContainer, toast } from "react-toastify"; // Added toast import
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Backendurl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="admin-panel-container">
        <div className="admin-panel-box">
          <h2 className="login-title">Admin Panel</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="form-label">Email</p>
              <input
                type="email"
                className="form-input"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <p className="form-label">Password</p>
              <input
                type="password"
                className="form-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="form-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
