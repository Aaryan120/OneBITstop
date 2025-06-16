import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ClubStrip from "./ClubStrip";

export default function LandingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800 font-sans overflow-hidden">
      {/* Hero Section */}
      <section
        className="
          relative 
          w-full 
          h-full
          flex 
          flex-col lg:flex-row 
          items-center 
          justify-center 
          px-6 sm:px-10 md:px-16 lg:px-20
          pt-24 sm:pt-32  /* breathing space from navbar */
          z-10
          gap-10 /* space between text and image on mobile */
        "
      >
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="relative z-10 text-center lg:text-left lg:w-1/2 space-y-6 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-600 leading-tight">
            OneBITstop
            <br className="hidden sm:block" /> EMPOWERING STUDENTS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0 drop-shadow-lg">
            Discover news, coordinate rides, buy/sell items, track attendance
            and more — all in one fun, vibrant platform built for students.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {user ? (
              <button 
                onClick={() => navigate('/profile')}
                className="relative group px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                <span className="relative z-10">View Profile</span>
                <span className="absolute inset-0 rounded-full bg-orange-500 opacity-0 group-hover:opacity-20 transition duration-300 animate-pulse pointer-events-none"></span>
              </button>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/login')}
                  className="relative group px-8 py-3 bg-white text-gray-800 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 border-2 border-gray-200"
                >
                  <span className="relative z-10">Sign In</span>
                  <span className="absolute inset-0 rounded-full bg-gray-100 opacity-0 group-hover:opacity-50 transition duration-300 pointer-events-none"></span>
                </button>
                <button 
                  onClick={() => navigate('/signup')}
                  className="relative group px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 rounded-full bg-orange-500 opacity-0 group-hover:opacity-20 transition duration-300 animate-pulse pointer-events-none"></span>
                </button>
              </>
            )}
          </div>

          {/* Features Preview */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">📰</span>
              <span className="text-white text-sm font-medium">Newsroom</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">🚗</span>
              <span className="text-white text-sm font-medium">HopBIT</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">🛒</span>
              <span className="text-white text-sm font-medium">BITListings</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">📊</span>
              <span className="text-white text-sm font-medium">Attendance</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        {/* Custom Keyframes */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
          `}
        </style>

        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div
            className="
              relative 
              w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] 
              overflow-hidden 
              shadow-2xl 
              border-[4px] border-white/60 
              rounded-full
            "
            style={{
              background: "linear-gradient(135deg, #ff6a00, #ee0979)",
              animation: "float 3s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animation =
                "pulse 1.5s ease-in-out infinite";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animation = "float 3s ease-in-out infinite";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <a
              href="https://bitmesra.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/bitphoto.JPG"
                alt="campus"
                className="w-full h-full object-cover rounded-3xl"
                style={{ transform: "translateX(-20px)" }}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
