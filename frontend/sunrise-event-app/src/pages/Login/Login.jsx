import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';
import person from '../../assets/person_icon.svg';
import { AppContent } from '../../context/AppContext';
import mail from '../../assets/mail_icon.svg'
import lock from '../../assets/lock_icon.svg'

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { backendUrl, setIsLoggedin ,getUserData} = useContext(AppContent); // Assuming setIsLoggedIn is provided by AppContent
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
          getUserData(); // Assuming getUserData is provided by AppContent to fetch user data
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
    } 
      catch (err) {
        console.error('Error during login/signup:', err);
        console.error('Error response:', err.response);
        toast.error(err.response?.data?.message || 'An error occurred');
      }
    
  };

  return (
    <div className='flex bg-orange-100 items-center justify-center min-h-screen px-6 sm:px-0 '>
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt=''
        className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'
      />
      <div className=' bg-amber-100 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        <h2 className='text-3xl  font-semibold text-black text-center mb-3'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className='text-center text-black text-sm mb-6'>
          {state === 'Sign Up' ? 'Create Your Account' : 'Login to Your Account'}
        </p>
        <form onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-slate-100'>
              <img src={person} alt=''></img>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='bg-transparent text-gray-400 outline-none'
                type='text'
                placeholder='Full Name'
                required
              ></input>
            </div>
          )}
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-slate-100'>
            <img src={mail} alt=''></img>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              className='bg-transparent text-gray-400 outline-none'
              placeholder='Email Id'
              required
            />
          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-slate-100'>
            <img src={lock} alt=''></img>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              className='bg-transparent text-gray-400 outline-none'
              placeholder='Password'
              required
            />
          </div>
          <p
            onClick={() => navigate('/reset-password')}
            className='mb-4 text-blue-400 cursor-pointer'
          >
            Forgot Password?
          </p>
          <button
            className='w-full py-2.5 rounded-full border-3 bg-yellow-300 border-yellow-400 text-black font-md hover:bg-yellow-400 '
          >
            {state}
          </button>
          {state === 'Sign Up' ? (
            <p className='text-black text-center text-s mt-3'>
              Already Have an Account?{' '}
              <span
                onClick={() => setState('Login')}
                className='text-blue-400 cursor-pointer underline'
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className='text-black text-center text-s mt-3'>
              Don't Have an Account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className='text-blue-400 cursor-pointer underline'
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