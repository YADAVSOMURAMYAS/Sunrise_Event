import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContent } from "../../context/AppContext";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userData, getUserData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
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

  const handleRole = async () => {
    await getUserData();
    if (userData?.role === "admin") navigate("/admin");
    else navigate("/");
  };
  const logout = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",  // Ensures cookies are included in the request
      });
  
      if (!response.ok) {
        throw new Error("Logout request failed");
      }
  
      const result = await response.json();  // Parse JSON manually
  
      if (result.success) {
        setUserData(null);
        setIsLoggedin(false);
        navigate("/");
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? "bg-transparent py-4"
          : "bg-gradient-to-r from-[#1a1a2e] to-[#16213e] shadow-xl py-3"
      } px-6 flex justify-between items-center`}
    >
      <div className="text-3xl font-bold text-white tracking-wider cursor-pointer" onClick={() => navigate("/")}> 
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Sunrise
        </span> Events
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {["Home", "Gallery", "Services", "Booking", "Contact"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-white text-lg font-medium tracking-wide transition-all hover:text-yellow-500"
          >
            {item}
          </Link>
        ))}

        {userData ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold"
            >
              {userData.name.charAt(0).toUpperCase()}
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-black">
                <li
                  onClick={handleRole}
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                >
                  Profile
                </li>
                <li
                  onClick={logout}
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200 text-red-600"
                >
                  Logout
                </li>
              </ul>
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

      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white text-3xl">
        {mobileMenu ? <FiX /> : <FiMenu />}
      </button>

      {mobileMenu && (
        <div className="absolute top-14 right-4 w-64 bg-[#1a1a2e] shadow-lg rounded-lg flex flex-col items-center gap-4 py-4 text-white text-lg">
          {["Home", "Gallery", "Services", "Booking", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              className="hover:text-yellow-400"
            >
              {item}
            </Link>
          ))}
          {userData ? (
            <>
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-lg">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white">
                  {userData.name.charAt(0).toUpperCase()}
                </div>
                {userData.name}
              </div>
              <button
                onClick={logout}
                className="border-2 border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="border-2 border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all"
            >
              Log In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
