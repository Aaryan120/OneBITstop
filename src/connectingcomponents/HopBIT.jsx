import React from 'react';
import { useNavigate } from 'react-router-dom';

const HopBIT = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🚉",
      title: "Match Travel Plans with Peers",
      description: "Going to Patna, Ranchi, Kolkata, or Delhi? Just post your travel plans and find others heading the same way."
    },
    {
      icon: "👤",
      title: "Trusted Campus-Only Platform",
      description: "Only verified students from BIT Mesra can join — no outsiders, no random drivers."
    },
    {
      icon: "💬",
      title: "Coordinate Easily",
      description: "Use in-app chat or contact details to discuss transport options — train, auto, bus, or shared taxi."
    },
    {
      icon: "💸",
      title: "Save Money, Travel Smart",
      description: "Share cabs, autos, or split rides from station to campus. Budget-friendly and convenient."
    },
    {
      icon: "🌍",
      title: "Build Your Circle",
      description: "Meet new people, travel safer, and make your journey more enjoyable."
    },
    {
      icon: "📅",
      title: "No Cabs, No Bookings, No Commission",
      description: "HopBIT isn't a ride-hailing app — it's a travel matchmaker for students."
    }
  ];

  const popularRoutes = [
    { from: "BIT Mesra", to: "Ranchi Station", icon: "🚂", color: "from-blue-500 to-blue-600" },
    { from: "BIT Mesra", to: "Patna", icon: "🚌", color: "from-green-500 to-green-600" },
    { from: "BIT Mesra", to: "Kolkata", icon: "✈️", color: "from-purple-500 to-purple-600" },
    { from: "BIT Mesra", to: "Delhi", icon: "🚄", color: "from-orange-500 to-orange-600" },
    { from: "BIT Mesra", to: "Jamshedpur", icon: "🚗", color: "from-red-500 to-red-600" },
    { from: "BIT Mesra", to: "Bokaro", icon: "🚐", color: "from-indigo-500 to-indigo-600" }
  ];

  const travelTypes = [
    { type: "Weekend Trips", icon: "🏠", description: "Head home for breaks" },
    { type: "Fest Travel", icon: "🎉", description: "Attend college fests" },
    { type: "Station Pickup", icon: "🚉", description: "From Ranchi station" },
    { type: "City Escape", icon: "🌆", description: "Quick getaways" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            🚗 HopBIT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Find Travel Buddies from BIT Mesra
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HopBIT is a community-driven travel coordination platform designed exclusively for BIT Mesra students 
            who want to connect with others heading the same way — whether it's a weekend trip home, a train ride 
            to Ranchi station, or a quick city escape.
          </p>
        </div>

        {/* Main Description */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Travel Smarter, Together
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No more endless group messages or last-minute solo travel. With HopBIT, you can find fellow 
                BITians who share your route and dates, plan journeys together, and split travel costs — 
                all while building connections and traveling safer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're heading home for a break, attending a fest in another city, or just looking 
                to avoid traveling alone — HopBIT helps you find like-minded travel partners from your own 
                college community.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Travel Matchmaker</h4>
                  <p className="text-gray-600">Connect, Share, Travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why HopBIT Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            🤝 Why HopBIT?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 group"
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

        {/* Popular Routes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Popular Routes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularRoutes.map((route, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 group cursor-pointer"
                onClick={() => navigate('/carpooling')}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {route.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {route.from}
                </h4>
                <p className="text-sm text-gray-600">
                  to {route.to}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Types of Travel
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {type.type}
                </h4>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Find Your Travel Buddy?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of BITians who are already using HopBIT to find travel partners, 
              save money, and make their journeys more enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/carpooling')}
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Find Travel Partners
              </button>
              <button 
                onClick={() => navigate('/carpooling')}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                Post My Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HopBIT; 