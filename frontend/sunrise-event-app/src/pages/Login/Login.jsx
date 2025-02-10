import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';
import { AppContent } from '../../context/AppContext';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/auth/register', {
          name,
          email,
          password,
        });
        if (data.success) {
          console.log('Login/Signup successful');
          setIsLoggedin(true);
          getUserData();
          navigate('/');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/auth/login', {
          email,
          password,
        });
        if (data.success) {
          console.log('Login/Signup successful');
          setIsLoggedin(true);
          getUserData();
          navigate('/');
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      console.error('Error during login/signup:', err);
      console.error('Error response:', err.response);
      toast.error(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt="Logo"
        className="login-logo"
      />
      <div className="login-form-container">
        <h2 className="login-form-title">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="login-form-subtitle">
          {state === 'Sign Up' ? 'Create Your Account' : 'Login to Your Account'}
        </p>
        <form onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div className="login-input-container">
              <PersonIcon sx={{ color: 'black' }} />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="login-input"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}
          <div className="login-input-container">
            <MailIcon sx={{ color: 'black' }} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="login-input"
              placeholder="Email Id"
              required
            />
          </div>
          <div className="login-input-container">
            <LockIcon sx={{ color: 'black' }} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="login-input"
              placeholder="Password"
              required
            />
          </div>
          <p
            onClick={() => navigate('/reset-password')}
            className="login-forgot-password"
          >
            Forgot Password?
          </p>
          <Button
  type="submit"
  variant="contained"
  fullWidth
  sx={{
    backgroundColor: '#fde047', // Yellow-300
    color: '#000', // Black text
    fontFamily:"Outfit",
    borderRadius:"15px",
    '&:hover': {
      backgroundColor: '#facc15', // Yellow-400 on hover
      transform: 'none', // Prevent scaling
    },
    transition: 'background-color 0.3s ease', // Smooth transition for background color
  }}
>
  {state}
</Button>
          {state === 'Sign Up' ? (
            <p className="login-toggle-text">
              Already Have an Account?{' '}
              <span
                onClick={() => setState('Login')}
                className="login-toggle-link"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="login-toggle-text">
              Don't Have an Account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="login-toggle-link"
              >
                SignUp
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;