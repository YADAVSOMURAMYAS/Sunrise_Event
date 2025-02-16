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
        const { data } = await axios.post(`${backendUrl}/api/auth/register`, { name, email, password });
        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate('/');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/auth/login`, { email, password });
        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate('/');
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo at Top Left */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-5 w-28 cursor-pointer md:w-32"
        onClick={() => navigate('/')}
      />

      {/* Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
        <p className="text-gray-600 mt-2">{state === 'Sign Up' ? 'Create Your Account' : 'Login to Your Account'}</p>

        <form onSubmit={onSubmitHandler} className="mt-4">
          {state === 'Sign Up' && (
            <div className="flex items-center border rounded-md p-2 mb-3 bg-gray-100">
              <PersonIcon sx={{ color: 'black' }} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full bg-transparent outline-none px-2 text-black"
              />
            </div>
          )}
          
          <div className="flex items-center border rounded-md p-2 mb-3 bg-gray-100">
            <MailIcon sx={{ color: 'black' }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email ID"
              required
              className="w-full bg-transparent outline-none px-2 text-black"
            />
          </div>

          <div className="flex items-center border rounded-md p-2 mb-3 bg-gray-100">
            <LockIcon sx={{ color: 'black' }} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-transparent outline-none px-2 text-black"
            />
          </div>

          <p onClick={() => navigate('/reset-password')} className="text-blue-500 text-sm cursor-pointer mb-4">
            Forgot Password?
          </p>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#fde047',
              color: '#000',
              fontFamily: 'Outfit',
              borderRadius: '15px',
              '&:hover': {
                backgroundColor: '#facc15',
                transform: 'none',
              },
              transition: 'background-color 0.3s ease',
            }}
          >
            {state}
          </Button>

          {state === 'Sign Up' ? (
            <p className="text-sm mt-4">
              Already Have an Account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-blue-600 font-semibold cursor-pointer"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="text-sm mt-4">
              Don't Have an Account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-blue-600 font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
