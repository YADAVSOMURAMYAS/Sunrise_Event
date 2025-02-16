import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContent } from "../../context/AppContext";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userData } = useContext(AppContent);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-gradient-to-r from-[#1a1a2e] to-[#16213e] shadow-xl py-3"
          : "bg-transparent py-4"
      } px-6 flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-white tracking-wider cursor-pointer" onClick={() => navigate("/")}>
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Sunrise
        </span>{" "}
        Events
      </div>

      {/* Navigation + Log In Button (Hide when mobile menu is open) */}
      <div className={`hidden md:flex gap-8 items-center ${mobileMenu ? "hidden" : "flex"}`}>
        {["Home", "Gallery", "Services", "Booking", "Contact"].map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-white text-lg font-medium tracking-wide relative group transition-all hover:text-yellow-500"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}

        {/* Log In Button (Hide when mobile menu is open) */}
        {!userData && (
          <Link
            to="/login"
            className="text-white text-lg border-2 border-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all"
          >
            Log In
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white text-3xl focus:outline-none">
        {mobileMenu ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu (Now with Log In Button inside) */}
      {mobileMenu && (
        <div className="absolute top-14 right-4 w-64 bg-[#1a1a2e] shadow-lg rounded-lg flex flex-col items-center gap-4 py-4 text-white text-lg">
          {["Home", "Gallery", "Services", "Booking", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              className="hover:text-yellow-400"
            >
              {item}
            </Link>
          ))}
          {/* Log In Button inside Mobile Menu */}
          {!userData && (
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
