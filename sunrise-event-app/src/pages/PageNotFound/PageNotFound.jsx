import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import error from '../../assets/404.png';
import './PageNotFound.css'; // Import the CSS file

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Navbar />
      <div className="page-not-found-container">
        <img src={error} className='img' alt="404 Not Found" />
        <h1>Oops! Page Not Found</h1>
        <p>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
          Please check the URL or return to the home page.
        </p>
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
