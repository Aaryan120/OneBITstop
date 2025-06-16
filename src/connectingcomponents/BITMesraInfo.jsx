import React from 'react';

const BITMesraInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            About BIT Mesra
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Birla Institute of Technology, Mesra is one of India's premier engineering institutions, 
            fostering innovation, excellence, and leadership since 1955.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* History & Legacy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Rich Legacy</h3>
            <p className="text-gray-600 text-center">
              Established in 1955, BIT Mesra has been at the forefront of technical education, 
              producing leaders and innovators who have shaped industries worldwide.
            </p>
          </div>

          {/* Academic Excellence */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Academic Excellence</h3>
            <p className="text-gray-600 text-center">
              Consistently ranked among top engineering institutions with world-class faculty, 
              state-of-the-art facilities, and industry-aligned curriculum.
            </p>
          </div>

          {/* Innovation Hub */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Innovation Hub</h3>
            <p className="text-gray-600 text-center">
              A breeding ground for innovation with cutting-edge research centers, 
              startup incubation, and strong industry partnerships.
            </p>
          </div>

          {/* Global Recognition */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Global Recognition</h3>
            <p className="text-gray-600 text-center">
              Internationally recognized with collaborations with leading universities 
              and organizations across the globe.
            </p>
          </div>

          {/* Student Life */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Vibrant Campus Life</h3>
            <p className="text-gray-600 text-center">
              A dynamic campus with diverse cultural activities, technical festivals, 
              sports events, and numerous student clubs and organizations.
            </p>
          </div>

          {/* Industry Connect */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Industry Connect</h3>
            <p className="text-gray-600 text-center">
              Strong industry partnerships with leading companies ensuring excellent 
              placement opportunities and real-world exposure for students.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Key Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                65+ Years
              </div>
              <p className="text-gray-600">Of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                50,000+
              </div>
              <p className="text-gray-600">Alumni Worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-gray-600">Industry Partners</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                95%+
              </div>
              <p className="text-gray-600">Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BITMesraInfo; 