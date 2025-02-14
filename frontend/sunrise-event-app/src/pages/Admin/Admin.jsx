import React from 'react';
import AdminCalendar from '../../components/Calendar/AdminCalendar';
import Navbar from '../../components/Navbar/Navbar';

const Admin = () => {
  return (
    <>
      <Navbar /> {/* Add your Navbar component here */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        backgroundColor: '#f0f2f5',
        marginTop: '50px',
      }}>
        <div style={{
          width: '80%', // Adjust width as needed
          maxWidth: '900px', // Maximum width to prevent it from getting too wide
          minWidth: '300px', // Minimum width to ensure it doesn't get too small
          padding: '20px', // Add some padding
          backgroundColor: '#fff', // White background for the calendar container
          borderRadius: '8px', // Rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
           // Margin
        }}>
          <AdminCalendar />
        </div>
      </div>
    </>
  );
};

export default Admin;