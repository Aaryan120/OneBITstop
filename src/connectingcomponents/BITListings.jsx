import React from 'react';
import { useNavigate } from 'react-router-dom';

const BITListings = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🛡️",
      title: "Buy & Sell with Confidence",
      description: "Verified users ensure that listings are trustworthy and transactions stay secure."
    },
    {
      icon: "🏫",
      title: "Campus-Centric",
      description: "All listings are posted by fellow BITians, making pickups and deals easy within the campus premises."
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Culture",
      description: "Promote sustainability through reusing and recycling student goods."
    },
    {
      icon: "⚡",
      title: "Smooth Experience",
      description: "Intuitive filters, categories, and chat features make your transactions fast and frictionless."
    },
    {
      icon: "🤝",
      title: "Community-Powered",
      description: "Users can rate sellers and buyers, flag inappropriate listings, and recommend posts — making the platform fair and transparent."
    }
  ];

  const categories = [
    { name: "Textbooks", icon: "📚", color: "from-blue-500 to-blue-600" },
    { name: "Electronics", icon: "💻", color: "from-green-500 to-green-600" },
    { name: "Fashion", icon: "👕", color: "from-purple-500 to-purple-600" },
    { name: "Sports", icon: "⚽", color: "from-orange-500 to-orange-600" },
    { name: "Hostel Essentials", icon: "🏠", color: "from-pink-500 to-pink-600" },
    { name: "Lab Equipment", icon: "🔬", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            BITListings
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Your One-Stop Student Marketplace at BIT Mesra
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BITListings is the official campus-based marketplace built exclusively for the students, 
            faculty, and alumni of Birla Institute of Technology, Mesra. Whether you're looking to buy, 
            sell, exchange, or discover, BITListings provides a safe, streamlined, and student-friendly 
            environment to fulfill your everyday campus needs.
          </p>
        </div>

        {/* Main Description */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                More Than Just a Marketplace
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From second-hand textbooks and lab equipment to bicycles, electronics, hosteller essentials, 
                or even fashion items — BITListings connects the vibrant BIT community with just a few clicks.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a fresher looking to furnish your hostel room on a budget or a final-year 
                student decluttering before leaving campus — BITListings is your go-to hub to find value 
                and give value back.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Campus Marketplace</h4>
                  <p className="text-gray-600">Connect, Trade, Thrive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose BITListings?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Popular Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200 group cursor-pointer"
                onClick={() => navigate('/sellbuy')}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-gray-800">
                  {category.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Start Trading?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of BITians who are already buying, selling, and connecting 
              through our trusted campus marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/sellbuy')}
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Start Selling
              </button>
              <button 
                onClick={() => navigate('/sellbuy')}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Browse Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BITListings; 