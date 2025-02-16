import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContent } from "../../context/AppContext";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const handleRole = async () => {
    await getUserData();
    if (userData?.role === "admin") {
      navigate("/admin");
    } else if (userData?.role === "user") {
      navigate("/");
    } else {
      toast.error("User role not found.");
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
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

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        {["Home", "Gallery", "Services", "Booking", "Contact"].map((item, index) => (
          <Link key={index} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-white text-lg font-medium tracking-wide hover:text-yellow-500">
            {item}
          </Link>
        ))}

        {/* User Dropdown */}
        {userData ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center text-xl"
            >
              {userData.name.charAt(0).toUpperCase()}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#1a1a2e] text-white rounded-lg shadow-lg">
                {!userData.isAccountVerified && (
                  <button
                    onClick={sendVerificationOtp}
                    className="block w-full text-left px-4 py-2 hover:bg-yellow-500"
                  >
                    Verify Email
                  </button>
                )}
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="text-white text-lg border-2 border-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all"
          >
            Log In
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
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
          {!userData && (
            <Link to="/login" onClick={() => setMobileMenu(false)} className="border-2 border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
              Log In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
