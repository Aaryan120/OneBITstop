import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { USER_API_ENDPOINT } from "../../constants";
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiCalendar, FiArrowRight } from "react-icons/fi";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    graduatingYear: "",
  });
  const [showResend, setShowResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isVerified, setIsVerified] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (alert.type === "success") {
      const timer = setTimeout(() => {
        setShowResend(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const resendVerification = async () => {
    try {
      await axios.post(`${USER_API_ENDPOINT}/api/user/resend-verification`, {
        email: formData.email,
      });
      toast.success("📧 Verification email resent. Check your inbox.");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to resend verification email."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ message: "", type: "" });
    setLoading(true);

    try {
      const response = await axios.post(
        `${USER_API_ENDPOINT}/api/user/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAlert({
        message:
          response.data.message ||
          "🎉 Account created! Please verify your email.",
        type: "success",
      });

      toast.success("✅ Please verify your email to activate your account.");
    } catch (error) {
      const message = error.response?.data?.message;
      
      if (message.includes("not verified")) {
        setShowResend(true);
        setAlert({
          message: "You are already registered but not verified.",
          type: "warning",
        });
      } else if (message.includes("verified")) {
        setAlert({
          message: "User already registered. Please log in.",
          type: "info",
        });
      } else {
        setAlert({ message: "Signup failed. Try again.", type: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                OneBITstop
              </h1>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h2>
            <p className="text-gray-600">Join the BIT Mesra community</p>
          </div>

          {/* Signup Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {alert.message && (
                <div className={`rounded-lg p-4 ${
                  alert.type === "success" 
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : alert.type === "warning"
                    ? "bg-yellow-50 border border-yellow-200 text-yellow-700"
                    : alert.type === "info"
                    ? "bg-blue-50 border border-blue-200 text-blue-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}>
                  <p className="text-sm">{alert.message}</p>
                  {showResend && (
                    <button
                      type="button"
                      onClick={resendVerification}
                      className="text-sm underline mt-2 hover:no-underline"
                    >
                      Resend verification email
                    </button>
                  )}
                </div>
              )}

              {/* Full Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="btech10XXX.XX@bitmesra.ac.in"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876XXXX210"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Graduating Year Field */}
              <div>
                <label htmlFor="graduatingYear" className="block text-sm font-medium text-gray-700 mb-2">
                  Graduating Year
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="graduatingYear"
                    type="number"
                    value={formData.graduatingYear}
                    onChange={handleChange}
                    placeholder="202X"
                    min="2020"
                    max="2030"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || isRegistered}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <span>Creating account...</span>
                  </>
                ) : isRegistered && isVerified ? (
                  <span>User already registered. Please login.</span>
                ) : isRegistered && isVerified === false ? (
                  <span>You're already registered but not verified.</span>
                ) : (
                  <>
                    <span>Create account</span>
                    <FiArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="inline-flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Sign in to your account
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-orange-600 hover:text-orange-700">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-orange-600 hover:text-orange-700">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage; 