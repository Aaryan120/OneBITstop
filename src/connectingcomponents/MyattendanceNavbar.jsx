import React, { useState, useEffect } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../constants";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { CalendarCheck } from 'lucide-react';

const Navbar = ({
  subjects,
  setSubjects,
  selectedSubject,
  setSelectedSubject,
}) => {
  const [newSubject, setNewSubject] = useState("");
  const { token, user } = useAuth();
  const { isDark } = useTheme();

  const addSubject = () => {
    const trimmedSubject = newSubject.trim().toUpperCase(); // Convert to uppercase
    if (!trimmedSubject) return;

    if (!subjects.includes(trimmedSubject)) {
      setSubjects([...subjects, trimmedSubject]);
      setSelectedSubject(trimmedSubject);
      setNewSubject("");
    } else {
      alert("Subject already exists");
    }
  };

  const removeSubject = async (subject) => {
    if (!token) {
      alert("User not authenticated");
      console.warn("No token found, aborting subject removal.");
      return;
    }

    try {
      // DELETE request with subject in request body
      const response = await axios.delete(
        `${USER_API_ENDPOINT}/api/attendance/subject/${encodeURIComponent(
          subject
        )}`,
        {
          withCredentials: true,
        }
      );

      // Remove subject locally after successful delete
      setSubjects(subjects.filter((s) => s !== subject));

      // Reset selected subject if it was deleted
      if (selectedSubject === subject) {
        setSelectedSubject(null);
      }
    } catch (error) {
      console.error("Failed to delete subject:", error);
      alert("Failed to delete subject from database.");
    }
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/30">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <CalendarCheck size={36} className="text-blue-500 dark:text-blue-400 drop-shadow-md" style={{background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
        <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent tracking-wide select-none">
          MyAttendance
        </span>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full md:w-auto overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 dark:scrollbar-thumb-blue-300 dark:scrollbar-track-gray-700">
        {subjects.map((subject) => (
          <div
            key={subject}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow-sm cursor-pointer select-none whitespace-nowrap transition-all duration-200
              ${
                selectedSubject === subject
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-600/50 hover:bg-blue-50 dark:hover:bg-gray-600/80 hover:scale-105"
              }`}
            onClick={() => setSelectedSubject(subject)}
            title="Click to select"
          >
            {subject}
            <button
              className="text-red-500 hover:text-red-700 dark:hover:text-red-400 focus:outline-none transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                removeSubject(subject);
              }}
              title="Remove subject"
            >
              ✖
            </button>
          </div>
        ))}

        <div className="flex items-center gap-2 min-w-[140px] md:min-w-[180px] flex-shrink-0">
          <input
            type="text"
            className="border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-700/80 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 transition-all placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            placeholder="New Subject"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addSubject()}
          />
          <button
            onClick={addSubject}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl focus:outline-none transition-all duration-200 whitespace-nowrap transform hover:scale-105"
            aria-label="Add new subject"
          >
            ➕ Add
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
