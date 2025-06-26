import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { forgotPassword } from "./services/operations/userApi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await forgotPassword({ email });

      setMsg(res.message);
      toast(
        "Reset link sent. Check your email.",
        {
          type: "success",
          duration: 3000,
          position: "bottom-right",
          icon: "🎉",
        }
      );
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Something went wrong";

      setMsg(errorMsg);
      toast(
        errorMsg,
        {
          type: "error",
          duration: 3000,
          position: "bottom-right",
          icon: "❌",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-zinc-900">
      <Toaster />
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Forgot Password
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-6">
          Enter your registered <span className="font-medium text-blue-600">BIT Mesra</span> email to receive a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:text-white transition duration-150 ease-in-out"
              placeholder="btechXXXX.2X@bitmesra.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200 font-semibold shadow-md disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {msg && (
          <div className="mt-4 text-sm text-center text-blue-600 dark:text-blue-400 animate-fade-in">
            {msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
