import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContent } from "../../context/AppContext";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { getUserData, userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(${backendUrl}/api/auth/send-verify-otp);
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
      const { data } = await axios.post(${backendUrl}/api/auth/logout);
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
    <nav className={fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? "bg-gradient-to-r from-[#1a1a2e] to-[#16213e] shadow-xl py-3" : "bg-transparent py-4"} px-6 flex justify-between items-center}>
      <div className="text-3xl font-bold text-white tracking-wider cursor-pointer" onClick={() => navigate("/")}> 
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Sunrise</span> Events
      </div>
      <div className={hidden md:flex gap-8 items-center ${mobileMenu ? "hidden" : "flex"}}>
        {["Home", "Gallery", "Services", "Booking", "Contact"].map((item, index) => (
          <Link key={index} to={item === "Home" ? "/" : /${item.toLowerCase()}} className="text-white text-lg font-medium tracking-wide relative group transition-all hover:text-yellow-500">
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
        {userData ? (
          <div className="relative group text-yellow-400 font-bold text-lg cursor-pointer">
            <button onClick={handleRole} className="bg-transparent border-none cursor-pointer focus:outline-none">
              {userData.name}
            </button>
            <div className="absolute hidden group-hover:block top-8 right-0 bg-gray-100 shadow-lg rounded-lg text-black text-sm w-40 py-2">
              {!userData.isAccountVerified && (
                <div onClick={sendVerificationOtp} className="py-2 px-4 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
                  Verify Email
                </div>
              )}
              <div onClick={logout} className="py-2 px-4 hover:bg-gray-200 hover:text-red-600 cursor-pointer">
                Logout
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login" className="text-white text-lg border-2 border-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
            Log In
          </Link>
        )}
      </div>
      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white text-3xl focus:outline-none">
        {mobileMenu ? <FiX /> : <FiMenu />}
      </button>
      {mobileMenu && (
        <div className="absolute top-14 right-4 w-64 bg-[#1a1a2e] shadow-lg rounded-lg flex flex-col items-center gap-4 py-4 text-white text-lg">
          {["Home", "Gallery", "Services", "Booking", "Contact"].map((item, index) => (
            <Link key={index} to={item === "Home" ? "/" : /${item.toLowerCase()}} onClick={() => setMobileMenu(false)} className="hover:text-yellow-400">
              {item}
            </Link>
          ))}
          {userData ? (
            <div className="text-yellow-400 font-bold cursor-pointer" onClick={logout}>Logout</div>
          ) : (
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
