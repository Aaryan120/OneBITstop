import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import LoginForm from "./Login";
import { useAuth } from "../context/AuthContext"; // make sure this path is correct
import { logout } from "./Login";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const modalRef = useRef(null);

  const { user, setUser, logout: logoutFn, loading } = useAuth();

  // get user and setter from context

  if (loading) {
    return (
      <div className="flex justify-center items-center h-16">
        {/* Simple spinner SVG or any loading UI */}
        <svg
          className="animate-spin h-6 w-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    );
  }

  const navLinks = [
    // { href: "/newsroom", label: "Newsroom" },
    { href: "/lostfound", label: "Lost & Found" },
    { href: "/hopbit", label: "HopBIT" },
    { href: "/bitlistings", label: "BITListings" },
    { href: "/myattendance", label: "My Attendance" },

  ];

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser); // update user in context on login success
    setShowLogin(false);
  };

  const handleLogout = () => {
    logout(logoutFn); // ✅ this clears both context + localStorage

    navigate("/");
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === "/attendance" && !user) {
      toast.error("Please login to view and track your attendance.");
      return;
    }

    // Navigate to the page directly without hash handling
    navigate(href);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = showLogin ? "hidden" : "";
  }, [showLogin]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showLogin &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setShowLogin(false);
      }
    };
    const handleEscape = (e) => e.key === "Escape" && setShowLogin(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLogin]);

  const LoginOrProfileButton = user ? (
    <div className="relative flex items-center space-x-3">
      <div className="group relative">
        <FiUser
          onClick={() => navigate("/profile")}
          className={`w-10 h-10 p-2 rounded-full border-2 shadow-lg cursor-pointer hover:scale-105 transform transition duration-300 ${
            location.pathname === "/profile"
              ? "text-white bg-orange-500 border-orange-500"
              : "text-orange-500 bg-white border-orange-200 hover:bg-orange-500 hover:text-white"
          }`}
          title="Go to Profile"
        />
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          View Profile
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition duration-300 shadow-md"
        title="Logout"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => navigate('/login')}
        className="px-4 py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors duration-300"
      >
        Sign in
      </button>
      <button
        onClick={() => navigate('/signup')}
        className="relative group px-6 py-2.5 overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        <span className="relative z-10">Get Started</span>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );

  return (
    <>
      <Toaster />

      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-orange-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="/"
              className="flex items-center space-x-2 group"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                OneBITstop
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navLinks.map(({ href, label }) => {
                const isActive = location.pathname === href;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`relative text-base md:text-lg font-semibold transition-colors duration-300 group px-1 md:px-2 ${
                      isActive 
                        ? "text-orange-500" 
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </a>
                );
              })}
              {LoginOrProfileButton}
            </div>

            {/* Mobile/Menu Button for md and below */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-orange-500 hover:bg-orange-50 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes size={24} className="transform hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <FaBars size={24} className="transform hover:rotate-180 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav for md and below */}
        {isOpen && (
          <div className="lg:hidden fixed top-16 md:top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-orange-100 shadow-xl z-40">
            <div className="flex flex-col px-2 sm:px-4 py-4 space-y-2 sm:space-y-3">
              {navLinks.map(({ href, label }) => {
                const isActive = location.pathname === href;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 text-base font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                      isActive 
                        ? "text-orange-500 bg-orange-50 border-l-4 border-orange-500" 
                        : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {label}
                    <FaChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${
                      isActive ? "text-orange-500" : "text-orange-400"
                    }`} />
                  </a>
                );
              })}
              <div className="pt-3 sm:pt-4 border-t border-orange-100">
                {user ? (
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => navigate("/profile")}
                      className={`flex items-center px-3 py-2 sm:px-4 sm:py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                        location.pathname === "/profile"
                          ? "text-orange-500 bg-orange-50 border-l-4 border-orange-500"
                          : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`}
                    >
                      <FiUser className="w-5 h-5 mr-2" />
                      View Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-3 py-2 sm:px-4 sm:py-3 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => navigate('/login')}
                      className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300"
                    >
                      Sign in
                    </button>
                    <button
                      onClick={() => navigate('/signup')}
                      className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 text-base font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    >
                      Get Started
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideDown {
            animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              ref={modalRef}
              className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-2xl max-w-lg w-full p-8 sm:p-10 relative border border-orange-100"
            >
              <button
                onClick={() => setShowLogin(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-orange-500 text-2xl transition-colors duration-300"
              >
                &times;
              </button>
              <LoginForm
                onLoginSuccess={() => setShowLogin(false)}
                onClose={() => setShowLogin(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
