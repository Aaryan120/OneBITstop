import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <section className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🚗 HopBIT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            Find Travel Buddies from BIT Mesra
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            HopBIT is a community-driven travel coordination platform designed exclusively for BIT Mesra students 
            who want to connect with others heading the same way — whether it's a weekend trip home, a train ride 
            to Ranchi station, or a quick city escape.
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Travel Smarter, Together
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                No more endless group messages or last-minute solo travel. With HopBIT, you can find fellow 
                BITians who share your route and dates, plan journeys together, and split travel costs — 
                all while building connections and traveling safer.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you're heading home for a break, attending a fest in another city, or just looking 
                to avoid traveling alone — HopBIT helps you find like-minded travel partners from your own 
                college community.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Travel Matchmaker</h4>
                  <p className="text-gray-600 dark:text-gray-400">Connect, Share, Travel</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why HopBIT Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            🤝 Why HopBIT?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Routes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Popular Routes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group cursor-pointer"
                onClick={() => navigate('/carpooling')}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {route.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">
                  {route.from}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  to {route.to}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Types of Travel
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelTypes.map((travel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {travel.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {travel.type}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {travel.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Find Your Travel Buddy?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of BITians who are already using HopBIT to find travel partners, 
              save money, and make their journeys more enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/carpooling')}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Find Travel Partners
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/carpooling')}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Post My Trip
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HopBIT; 