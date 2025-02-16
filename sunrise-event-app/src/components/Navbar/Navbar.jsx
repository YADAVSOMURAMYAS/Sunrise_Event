import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FiMenu, FiX } from "react-icons/fi";
import { AppContent } from "../../context/AppContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { getUserData, userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`);
      if (data.success) {
        navigate("/email-verify");
        toast.success("OTP sent successfully");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send OTP");
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      if (data.success) {
        setUserData(null);
        setIsLoggedin(false);
        toast.success("Logged out successfully");
        navigate("/");
      } else {
        toast.error(data.message || "Logout failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to log out");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-[#1a1a2e] to-[#16213e] shadow-xl py-3" : "bg-transparent py-4"
      } px-6 flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-white tracking-wider cursor-pointer" onClick={() => navigate("/")}>
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Sunrise</span> Events
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {["Home", "Gallery", "Services", "Booking", "Contact"].map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-white text-lg font-medium tracking-wide relative group hover:text-yellow-500 transition-all"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}

        {/* User Profile (Desktop) */}
        {userData && (
          <div className="relative">
            <button onClick={() => setShowDropdown(!showDropdown)} className="w-10 h-10 rounded-full bg-yellow-500 text-black text-lg font-bold flex items-center justify-center">
              {userData.name[0].toUpperCase()}
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md py-2">
                {!userData.isAccountVerified && (
                  <button onClick={sendVerificationOtp} className="block w-full text-left px-4 py-2 hover:bg-gray-200">Verify Email</button>
                )}
                <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
              </div>
            )}
          </div>
        )}

        {/* Log In Button (Desktop) */}
        {!userData && (
          <Link to="/login" className="text-white border-2 border-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">Log In</Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white text-3xl focus:outline-none">
        {mobileMenu ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-14 right-4 w-64 bg-[#1a1a2e] shadow-lg rounded-lg flex flex-col items-center gap-4 py-4 text-white text-lg">
          {["Home", "Gallery", "Services", "Booking", "Contact"].map((item, index) => (
            <Link key={index} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="hover:text-yellow-400">
              {item}
            </Link>
          ))}
          {/* User Profile & Logout (Mobile) */}
          {userData && (
            <div className="w-full flex flex-col items-center">
              <button className="w-10 h-10 rounded-full bg-yellow-500 text-black text-lg font-bold flex items-center justify-center">
                {userData.name[0].toUpperCase()}
              </button>
              {!userData.isAccountVerified && (
                <button onClick={sendVerificationOtp} className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Verify Email</button>
              )}
              <button onClick={logout} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
            </div>
          )}
          {!userData && (
            <Link to="/login" onClick={() => setMobileMenu(false)} className="border-2 border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">Log In</Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
