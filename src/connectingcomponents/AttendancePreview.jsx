import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AttendancePreview = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      icon: "📊",
      title: "Visual Analytics",
      description: "Track your attendance with beautiful charts and detailed statistics."
    },
    {
      icon: "📅",
      title: "Calendar View",
      description: "Mark attendance directly on an interactive calendar interface."
    },
    {
      icon: "📚",
      title: "Subject Management",
      description: "Add, remove, and manage multiple subjects with ease."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description: "Monitor your attendance percentage and identify patterns."
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description: "Never miss marking your attendance with intelligent notifications."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access your attendance data from anywhere, anytime."
    }
  ];

  const stats = [
    { label: "Subjects", value: "Unlimited", icon: "📚" },
    { label: "Attendance Types", value: "3", icon: "✅❌🚫" },
    { label: "Data Sync", value: "Real-time", icon: "🔄" },
    { label: "Export", value: "Available", icon: "📤" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            My Attendance
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay on top of your academic journey with our comprehensive attendance tracking system. 
            Monitor your progress, identify patterns, and ensure you never fall behind in your studies.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Smart Attendance Management
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">Mark attendance for multiple subjects</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">Visual calendar interface for easy tracking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">Detailed analytics and progress reports</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">Secure data storage and real-time sync</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Attendance Dashboard</h4>
                <p className="text-gray-600">Track, Analyze, Excel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Track Your Progress?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students who are already using our attendance tracking system 
              to stay organized and excel in their academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <button 
                  onClick={() => navigate('/myattendance')}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  View My Attendance
                </button>
              ) : (
                <button 
                  onClick={() => navigate('/myattendance')}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Login to Access
                </button>
              )}
              <button 
                onClick={() => navigate('/myattendance')}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendancePreview; 