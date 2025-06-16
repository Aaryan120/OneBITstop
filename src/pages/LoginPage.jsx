import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { USER_API_ENDPOINT } from "../../constants";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const resendVerification = async () => {
    try {
      setLoading(true);
      await axios.post(`${USER_API_ENDPOINT}/api/user/resend-verification`, {
        email: formData.email,
      });
      toast.success("Verification email resent. Please check your inbox.");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to resend verification email."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setErrorMsg("Both fields are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/api/user/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (!res.data.success) {
        setErrorMsg(res.data.message || "Login failed.");
        setLoading(false);
        return;
      }

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      if (!user.isVerified) {
        setErrorMsg("Please verify your email before logging in.");
        toast.error("Please verify your email to activate your account.");
        setLoading(false);
        return;
      }

      login(user);
      const username = user?.name || user?.email || "User";
      toast.success(`Welcome back, ${username}!`);
      
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed.");
      console.error("Login error:", error);
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                  {errorMsg === "Please verify your email before logging in." && (
                    <button
                      type="button"
                      onClick={resendVerification}
                      className="text-red-600 hover:text-red-700 text-sm underline mt-2"
                    >
                      Resend verification email
                    </button>
                  )}
                </div>
              )}

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

              {/* Forgot Password */}
              <div className="flex items-center justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in</span>
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
                  <span className="px-2 bg-white text-gray-500">New to OneBITstop?</span>
                </div>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Create an account
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By signing in, you agree to our{" "}
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

export default LoginPage; 