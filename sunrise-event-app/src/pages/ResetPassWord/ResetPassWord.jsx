import React, { useState, useRef, useContext } from "react";

import logo from "../../assets/logo.png";
import { AppContent } from "../../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  axios.defaults.withCredentials = true;
  const { backendUrl } = useContext(AppContent);
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // Step 1: Email | Step 2: OTP | Step 3: Reset Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const inputRefs = useRef([]);

  // Handle Email Submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/send-reset-otp`, { email });

      if (data.success) {
        toast.success(data.message);
        setStep(2);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  // Handle OTP Input Change
  const handleOtpChange = (index, event) => {
    const value = event.target.value.replace(/\D/, ""); // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (index < 5 && value) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      handleOtpSubmit();
    }
  };

  // Handle OTP Submission (No API Call, Directly Go to Password Reset)
  const handleOtpSubmit = () => {
    setStep(3);
  };

  // Handle Backspace Navigation in OTP
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle OTP Paste Event
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);

    if (pastedText.length === 6) {
      setOtp(pastedText.split(""));
      inputRefs.current[5]?.focus();
      handleOtpSubmit();
    }
  };

  // Handle Password Reset Submission
  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      console.log(otp.join(""));
      const { data } = await axios.post(`${backendUrl}/api/auth/reset-password`, {
        email,
        otp: otp.join(""), // Convert array to string
        newPassword,
      });

      if (data.success) {
        toast.success("Password reset successful! Redirecting to login...");
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      {/* Logo - Positioned Top Right */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-8 w-28 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Step 1: Email Submission */}
      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="bg-white p-8 sm:p-10 rounded-lg shadow-lg w-96 sm:w-[450px] text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Reset Password</h2>
          <p className="text-gray-600 mt-2">Enter your registered email to receive an OTP.</p>

          <input
            type="email"
            placeholder="Email ID"
            className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
            Send OTP
          </button>
        </form>
      )}

      {/* Step 2: OTP Verification */}
      {step === 2 && (
        <form className="bg-white p-8 sm:p-10 rounded-lg shadow-lg w-96 sm:w-[450px] text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Enter OTP</h2>
          <p className="text-gray-600 mt-2">A 6-digit OTP has been sent to {email}.</p>

          <div className="flex justify-center space-x-3 sm:space-x-4 mt-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(event) => handleOtpChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength={1}
                className="w-12 h-12 sm:w-14 sm:h-14 text-2xl text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
              />
            ))}
          </div>

          <button
            type="button"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            onClick={handleOtpSubmit}
            disabled={otp.includes("")} // Disable button until all 6 digits are filled
          >
            Verify OTP
          </button>
        </form>
      )}

      {/* Step 3: Password Reset */}
      {step === 3 && (
        <form onSubmit={handlePasswordReset} className="bg-white p-8 sm:p-10 rounded-lg shadow-lg w-96 sm:w-[450px] text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Set New Password</h2>
          <p className="text-gray-600 mt-2">Enter your new password below.</p>

          <input
            type="password"
            placeholder="New Password"
            className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
