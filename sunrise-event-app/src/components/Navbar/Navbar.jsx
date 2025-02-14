import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios
import { toast } from "react-toastify"; // ✅ Import toast
import "./Navbar.css";
import { AppContent } from "../../context/AppContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getUserData,userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
  const navigate = useNavigate();
  const sendVerificationOtp=async()=>{
    try{
        axios.defaults.withCredentials=true;
        const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`);
        if (data.success) {
          navigate('/email-verify')
          toast.success("OTP sent successfully");
        } else {
          toast.error(data.message);
        }
    }
    catch(err){
      console.error(err);
      toast.error("Failed to send OTP");
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleRole = async () => {
    await getUserData();  // Ensure userData is up to date

    if (userData?.role === "admin") {
      navigate("/admin");
    } else if (userData?.role === "user") {
      navigate("/");
    } else {
      toast.error("User role not found.");
    }
  };
  const logout = async () => { // ✅ Corrected syntax
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      
      if (data.success) {
        console.log("Logged Out successfully");
        setUserData(null);
        setIsLoggedin(false);
        toast.success("Logged out successfully"); // ✅ Provide success feedback
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
    <div className={`navbox ${isScrolled ? "scrolled" : ""}`}>
      <div className="brand">Sunrise Event</div>
      <a href="/" className="home">Home</a>
      <a href="/gallery">Gallery</a>
      <a href="/services">Services</a>
      <a href="/booking">Booking</a>
      <a href="/contact">Contact</a>

      {userData ? (
  <div
    style={{ color: "#E6B800", fontSize: "18px", fontWeight: "bold" }}
    className="group relative"
  >
    <button
      onClick={handleRole}
      className="bg-transparent border-none cursor-pointer focus:outline-none"
      style={{ color: "#E6B800", fontSize: "18px", fontWeight: "bold" }}
    >
      {userData.name}
    </button>

 

          <div className="absolute hidden group-hover:block top-1 right-0 z-10 text-black rounded pt-10">
            <ul className="list-none m-0 p-2 w-3xs bg-gray-100 text-sm">
              {!userData.isAccountVerified && (
                <li onClick={sendVerificationOtp} className="py-1 px-2 hover:text-green-600 hover:bg-gray-200 cursor-pointer">
                  Verify Email
                </li>
              )}
              <li
                onClick={logout}
                className="py-1 px-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <a href="/login" className="login">Log In</a>
      )}
    </div>
  );
}

export default Navbar;
