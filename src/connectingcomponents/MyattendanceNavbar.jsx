import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Adjust path as needed
import { deleteSubject, addSubject, updateAttendance } from "../services/operations/attendanceApi";
import { toast } from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

const AddSubjectModal = ({ isOpen, onClose, onAddSubject }) => {
  const [newSubject, setNewSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    setIsLoading(true);
    try {
      await onAddSubject(newSubject);
      setNewSubject("");
      onClose();
    } catch (error) {
      console.error("Error adding subject:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Add New Subject</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject Name
            </label>
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter subject name"
              autoFocus
            />
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newSubject.trim() || isLoading}
              className={`px-4 py-2 text-white rounded-lg ${
                !newSubject.trim() || isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Adding..." : "Add Subject"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, subjectName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <BiTrash className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Delete Subject</h2>
            <p className="text-sm text-gray-600">This action cannot be undone</p>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700">
            Are you sure you want to delete <span className="font-semibold text-red-600">{subjectName}</span>?
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This will permanently remove the subject and all its attendance records.
          </p>
        </div>
        
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete Subject
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({
  subjects,
  setSubjects,
  selectedSubject,
  setSelectedSubject,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState(null);
  const [newSubject, setNewSubject] = useState("");
  const { token, user } = useAuth(); // Use token from your Auth context
  // const token = localStorage.getItem("token"); // Fallback if not using context

  const handleAddSubject = async (subjectName) => {
    try {
      const trimmedSubject = subjectName.trim().toUpperCase(); // Convert to uppercase
      if (!trimmedSubject) return;

      if (!subjects.includes(trimmedSubject)) {
        const res = await addSubject(trimmedSubject, token);
        
        if (res.success) {
          setSubjects([...subjects, trimmedSubject]);
          setSelectedSubject(trimmedSubject);
          toast.success("Subject added successfully!");
        } else {
          toast.error(res.message || "Failed to add subject");
        }
      } else {
        toast.error("Subject already exists");
      }
    } catch (error) {
      console.error("Failed to add subject:", error);
      toast.error("Failed to add subject");
      throw error;
    }
  };

  const handleDeleteClick = (subject) => {
    setSubjectToDelete(subject);
    setIsDeleteModalOpen(true);
    setIsDropdownOpen(false); // Close dropdown when opening delete modal
  };

  const handleDeleteConfirm = async () => {
    if (!subjectToDelete) return;

    if (!token) {
      toast("User not authenticated",
        {
          type: "warning",
          duration: 3000,
          position: "bottom-right",
          icon: "🔔",
        }
      )
      console.warn("No token found, aborting subject removal.");
      return;
    }

    try {
      // Use the API function instead of direct axios call
      await deleteSubject(subjectToDelete, token);

      // Remove subject locally after successful delete
      setSubjects(subjects.filter((s) => s !== subjectToDelete));

      // Reset selected subject if it was deleted
      if (selectedSubject === subjectToDelete) {
        setSelectedSubject(null);
      }

      toast.success("Subject deleted successfully!");
    } catch (error) {
      console.error("Failed to delete subject:", error);
      toast("Failed to delete subject from database.",
        {
          type: "error",
          duration: 3000,
          position: "bottom-right",
          icon: "❌",
        }
      )
    } finally {
      setIsDeleteModalOpen(false);
      setSubjectToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setSubjectToDelete(null);
  };

  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 via-white to-blue-50 p-4 md:p-5 rounded-3xl shadow-lg border border-blue-200">
        <div className="text-3xl font-extrabold text-blue-700 tracking-wide select-none mb-4 md:mb-0">
          📘 MyAttendance
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* My Subjects Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="font-semibold text-gray-800">My Subjects</span>
              <span className="text-sm text-gray-500">({subjects.length})</span>
              <svg
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                <div className="p-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Select Subject</h3>
                  {subjects.length === 0 ? (
                    <p className="text-sm text-gray-500">No subjects added yet</p>
                  ) : (
                    <div className="space-y-1">
                      {subjects.map((subject) => (
                        <div
                          key={subject}
                          className={`flex items-center justify-between p-2 rounded cursor-pointer ${
                            selectedSubject === subject
                              ? "bg-blue-100 text-blue-800"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => {
                            setSelectedSubject(subject);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span className="font-medium">{subject}</span>
                          <button
                            className="text-red-500 hover:text-red-700 focus:outline-none ml-2 p-1 rounded hover:bg-red-50"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteClick(subject);
                            }}
                            title="Remove subject"
                          >
                            <BiTrash/>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Selected Subject Display */}
          {selectedSubject && (
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
              {selectedSubject}
            </div>
          )}

          {/* Add New Subject Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 focus:outline-none transition whitespace-nowrap flex items-center gap-2"
            aria-label="Add new subject"
          >
            ➕ Add New Subject
          </button>
        </div>
      </nav>

      <AddSubjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddSubject={handleAddSubject}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        subjectName={subjectToDelete}
      />
    </>
  );
};

export default Navbar;
