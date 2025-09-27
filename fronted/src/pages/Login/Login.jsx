import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css';
import { FoodContext } from '../../context/FoodContext';

const backendUrl = 'http://localhost:4000';

const Login = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState('Login'); // 'Login' or 'Sign Up'
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { setToken } = useContext(FoodContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (currentState === 'Login') {
        const res = await axios.post(`${backendUrl}/api/user/login`, {
          email: formData.email,
          password: formData.password,
        });

        if (res.data.success) {
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.token);
          setToken(res.data.token);

          // Assuming backend sends user info with role, e.g., res.data.user.role === 'admin'
          if (res.data.user && res.data.user.role === 'admin') {
            // Navigate to admin dashboard route in your app
            navigate('/admin'); // Change this if your admin route is different
          } else {
            navigate('/');
          }

          // Clear form
          setFormData({ name: '', email: '', password: '' });
        } else {
          toast.error(res.data.message || 'Login failed');
        }
      } else {
        // Sign Up
        const res = await axios.post(`${backendUrl}/api/user/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if (res.data.success) {
          toast.success(res.data.message || 'Registered successfully!');
          setCurrentState('Login');
          setFormData({ name: '', email: '', password: '' });
        } else {
          toast.error(res.data.message || 'Sign Up failed');
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>

        {currentState === 'Sign Up' && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-input"
            required
            value={formData.name}
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-input"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <p className="fgt-password" onClick={() => toast.info('Forgot Password clicked')}>
          Forgot Password?
        </p>

        <p
          className="toggle-auth-state"
          onClick={() => {
            setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login');
            setFormData({ name: '', email: '', password: '' });
          }}
        >
          {currentState === 'Login' ? 'Create Account' : 'Login Here'}
        </p>

        <button type="submit" className="form-button" disabled={loading}>
          {loading ? 'Processing...' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
