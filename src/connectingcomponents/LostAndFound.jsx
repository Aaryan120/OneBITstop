import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LostAndFound = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🧾",
      title: "Post Lost Items",
      description: "Share details of what you lost — where, when, and any identifying features — so others can help."
    },
    {
      icon: "👜",
      title: "Post Found Items",
      description: "If you've found something lying around, help reunite it with its owner by listing it here."
    },
    {
      icon: "📸",
      title: "Image Uploads",
      description: "Add photos of found/lost items for easier identification and better chances of recovery."
    },
    {
      icon: "🎯",
      title: "Campus-Only Access",
      description: "Only verified BIT Mesra members can post or respond — making the platform safe, secure, and focused."
    },
    {
      icon: "🔔",
      title: "Notifications",
      description: "Get updates when someone responds to your post or when a match is found."
    },
    {
      icon: "💬",
      title: "Direct Contact",
      description: "Coordinate safely through in-app or provided contact info to arrange the return."
    }
  ];

  const commonItems = [
    { name: "ID Cards", icon: "🪪", color: "from-blue-500 to-blue-600" },
    { name: "Electronics", icon: "💻", color: "from-green-500 to-green-600" },
    { name: "Water Bottles", icon: "🥤", color: "from-purple-500 to-purple-600" },
    { name: "Books & Notes", icon: "📚", color: "from-orange-500 to-orange-600" },
    { name: "Wallets", icon: "👛", color: "from-pink-500 to-pink-600" },
    { name: "Chargers", icon: "🔌", color: "from-indigo-500 to-indigo-600" }
  ];

  const locations = [
    { place: "Library", icon: "📖", description: "Study materials, ID cards" },
    { place: "Labs", icon: "🔬", description: "Electronics, chargers" },
    { place: "Auditorium", icon: "🎭", description: "Personal items, water bottles" },
    { place: "Canteen", icon: "🍽️", description: "Wallets, phones, keys" }
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
            🧳 BIT Lost & Found
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            Reconnect with What Matters
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ever misplaced your ID card in the library, forgot your charger in the lab, or found a water bottle 
            in the auditorium? At a campus as large and dynamic as BIT Mesra, things get lost — and found — every day. 
            That's where the BIT Lost & Found platform steps in.
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
                Built for the BIT Mesra Community
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Built exclusively for the BIT Mesra community, this platform helps students, faculty, and staff 
                report lost items, post found items, and reconnect lost belongings with their rightful owners — 
                quickly and respectfully.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From lost wallets to found jackets, misplaced notes to forgotten electronics — BIT Lost & Found 
                is a simple, centralized place where your college community looks out for one another.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧳</div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Lost & Found Hub</h4>
                  <p className="text-gray-600 dark:text-gray-400">Connect, Recover, Reunite</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How It Helps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            🔍 How BIT Lost & Found Helps You
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

        {/* Common Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Common Lost & Found Items
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {commonItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group cursor-pointer"
                onClick={() => navigate('/lostfound')}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Common Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Common Locations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {location.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {location.place}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {location.description}
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
              Let's Make BIT Mesra a Place Where Nothing Truly Stays Lost
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join the BIT community in helping each other recover lost items and reunite found belongings 
              with their rightful owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/lostfound')}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Report Lost Item
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/lostfound')}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Post Found Item
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LostAndFound;
