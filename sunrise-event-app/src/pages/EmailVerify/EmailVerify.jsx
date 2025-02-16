import React, { useState, useRef, useContext, useEffect } from "react";
import "./EmailVerify.css";
import logo from "../../assets/logo.png";
import { AppContent } from "../../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailVerify = () => {
  axios.defaults.withCredentials = true;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const { backendUrl, isLoggedin, userData, getUserData } = useContext(AppContent);
  const navigate = useNavigate();

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text").slice(0, 6);
    setOtp(pastedText.split(""));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const otpArray = inputRefs.current.map((e) => e.value);
      const otp = otpArray.join("");
      const { data } = await axios.post(`${backendUrl}/api/auth/verify-account`, { otp });

      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedin && userData?.isAccountVerified) {
      navigate("/");
    }
  }, [isLoggedin, userData, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      {/* Logo - Positioned Top Left */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-8 w-28 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Verification Box - Increased Width */}
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg w-96 sm:w-[450px] text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Email Verification</h2>
        <p className="text-gray-600 mt-2">A 6-digit OTP has been sent to your email.</p>

        <form onSubmit={onSubmitHandler} className="mt-6">
          {/* OTP Inputs - Better Spacing */}
          <div className="flex justify-center space-x-3 sm:space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength={1}
                className="w-12 h-12 sm:w-14 sm:h-14 text-2xl text-center border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            ))}
          </div>

          {/* Custom Tailwind Button */}
          <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
            VERIFY
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerify;
