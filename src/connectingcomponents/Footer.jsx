import React, { useState } from "react";
import {
  Heart,
  Linkedin,
  Instagram,
  Github,
  TreePalm,
  Home,
  X,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const socialProfiles = [
    {
      id: "home",
      name: "Home",
      icon: Home,
      color: "orange",
      link: "/",
      description: "Return to homepage"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      color: "blue",
      description: "Connect with our team on LinkedIn",
      profiles: [
        {
          id: "shaurya",
          name: "Shaurya Aditya Verma",
          role: "Full Stack Developer",
          company: "BIT Mesra",
          location: "Ranchi, Jharkhand",
          about: "Passionate developer building innovative solutions for the student community.",
          experience: "2+ years in web development",
          skills: ["React", "Node.js", "MongoDB", "Python", "JavaScript"],
          link: "https://www.linkedin.com/in/shauryaaditya99/"
        },
        {
          id: "raj",
          name: "Raj Aryan",
          role: "Aspiring Software Developer",
          company: "BIT Mesra",
          location: "Dhanbad, Jharkhand",
          about: "Creative developer focused on user experience and modern web technologies.",
          experience: "1.5+ years in Full Stack development",
          skills: ["React", "Nodejs", "TypeScript", "CSS", "DataStructure&Algorithms"],
          link: "https://www.linkedin.com/in/raj-aaryan-38923a25b/"
        },
        {
          id: "priya",
          name: "Priya Sharma",
          role: "Backend Developer",
          company: "BIT Mesra",
          location: "Delhi, India",
          about: "Backend specialist with expertise in scalable architecture and database design.",
          experience: "2+ years in backend development",
          skills: ["Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
          link: "https://www.linkedin.com/in/priyasharma/"
        }
      ]
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "pink",
      description: "Follow our team on Instagram",
      profiles: [
        {
          id: "Ayush_raj16",
          name: "Ayush Raj",
          handle: "@ayush_raj16",
          followers: "500+",
          content: "Personal Instagram",
          highlights: ["Personal", "Lifestyle", "Campus Life"],
          link: "https://www.instagram.com/ayush_raj16"
        },
        {
          id: "raj_tech",
          name: "Raj Aryan",
          handle: "@raj_aaryan10",
          followers: "300+",
          content: "Personal Instagram",
          highlights: ["Personal", "Lifestyle", "Campus Life"],
          link: "https://www.instagram.com/raj_aaryan10"
        },
        {
          id: "priya_dev",
          name: "Priya Dev",
          handle: "@priya_dev",
          followers: "400+",
          content: "Backend Development & Career Tips",
          highlights: ["Backend", "Career", "Women in Tech"],
          link: "https://www.instagram.com/priya_dev"
        }
      ]
    },
    {
      id: "github",
      name: "GitHub",
      icon: Github,
      color: "black",
      description: "View our projects on GitHub",
      profiles: [
        {
          id: "shauryaadi99",
          name: "shauryaadi99",
          repos: "25+",
          followers: "50+",
          contributions: "500+",
          topLanguages: ["JavaScript", "Python", "Java"],
          featuredProjects: ["OneBITstop", "Student Portal", "E-commerce"],
          link: "https://github.com/shauryaadi99/"
        },
        {
          id: "Aaryan120",
          name: "Raj Aryan",
          repos: "15+",
          followers: "30+",
          contributions: "150+",
          topLanguages: ["TypeScript", "React", "Nodejs"],
          featuredProjects: ["UI Components", "Portfolio", "Blog"],
          link: "https://github.com/Aaryan120"
        },
        {
          id: "priyasharma",
          name: "priyasharma",
          repos: "20+",
          followers: "40+",
          contributions: "400+",
          topLanguages: ["Python", "Node.js", "Go"],
          featuredProjects: ["API Gateway", "Microservices", "Database Tools"],
          link: "https://github.com/priyasharma/"
        }
      ]
    },
    {
      id: "linktree",
      name: "Linktree",
      icon: TreePalm,
      color: "green",
      description: "All links in one place",
      profiles: [
        {
          id: "shaurya_links",
          name: "Shaurya Aditya Verma",
          bio: "Student Developer | Tech Enthusiast",
          links: ["Portfolio", "Resume", "Social Media", "Contact"],
          theme: "Professional",
          link: "https://linktr.ee/Shaurya_Aditya_Verma"
        },
        {
          id: "raj_links",
          name: "Raj Aryan",
          bio: "Frontend Developer | UI/UX Designer",
          links: ["Portfolio", "Resume", "Blog", "Contact"],
          theme: "Creative",
          link: "https://linktr.ee/rajaryan"
        },
        {
          id: "priya_links",
          name: "Priya Sharma",
          bio: "Backend Developer | System Architect",
          links: ["Portfolio", "Resume", "Tech Blog", "Contact"],
          theme: "Minimal",
          link: "https://linktr.ee/priyasharma"
        }
      ]
    }
  ];

  const handleProfileClick = (platform) => {
    if (platform.id === "home") {
      // For home, just navigate
      window.location.href = platform.link;
    } else {
      // For other platforms, show platform selection
      setSelectedPlatform(platform);
    }
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    // setSelectedPlatform(null);
  };

  const closePopup = () => {
    setSelectedProfile(null);
    setSelectedPlatform(null);
  };

  const handleExternalLink = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    closePopup();
  };

  return (
    <>
      <footer className="bg-white border-t border-gray-200 py-10 text-sm text-gray-500 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Logo and Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-orange-500 tracking-wide">
              <a href="/">OneBITstop</a>
            </h3>
            <p className="mt-1 text-gray-500">
              Empowering students, digitally ✨
            </p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex justify-center flex-wrap gap-6">
            {socialProfiles.map((platform) => {
              const IconComponent = platform.icon;
              const hoverColor = platform.color === "orange" ? "hover:text-orange-500" :
                               platform.color === "blue" ? "hover:text-blue-500" :
                               platform.color === "pink" ? "hover:text-pink-600" :
                               platform.color === "black" ? "hover:text-black" :
                               "hover:text-green-500";

              return (
                <button
                  key={platform.id}
                  onClick={() => handleProfileClick(platform)}
                  className={`text-gray-400 ${hoverColor} transition-transform transform hover:scale-125 duration-300 p-2 rounded-lg hover:bg-gray-100`}
                  title={platform.description}
                  aria-label={platform.description}
                >
                  <IconComponent size={28} strokeWidth={1.8} />
                </button>
              );
            })}
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="flex justify-center md:justify-end items-center gap-1 text-gray-500">
              Made with <Heart size={16} className="text-red-500" /> by BITians
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-medium text-gray-600">
                OneBITstop
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Platform Selection Modal */}
      {selectedPlatform && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Platform Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-full bg-${selectedPlatform.color}-100`}>
                <selectedPlatform.icon 
                  size={32} 
                  className={`text-${selectedPlatform.color}-600`}
                  strokeWidth={1.8} 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedPlatform.name}
                </h3>
                <p className="text-gray-600">{selectedPlatform.description}</p>
              </div>
            </div>

            {/* Profile List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {selectedPlatform.profiles.map((profile) => (
                <div
                  key={profile.id}
                  onClick={() => handleProfileSelect(profile)}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{profile.name}</h4>
                      {profile.role && (
                        <p className="text-sm text-gray-600">{profile.role}</p>
                      )}
                      {profile.handle && (
                        <p className="text-sm text-gray-600">{profile.handle}</p>
                      )}
                      {profile.bio && (
                        <p className="text-sm text-gray-600">{profile.bio}</p>
                      )}
                    </div>
                    <Users size={20} className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Individual Profile Modal */}
      {selectedProfile && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-blue-100">
                <Users size={32} className="text-blue-600" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedProfile.name}
                </h3>
                {selectedProfile.role && (
                  <p className="text-blue-700">{selectedProfile.role}</p>
                )}
                {selectedProfile.handle && (
                  <p className="text-pink-700">{selectedProfile.handle}</p>
                )}
                {selectedProfile.bio && (
                  <p className="text-green-700">{selectedProfile.bio}</p>
                )}
              </div>
            </div>

            {/* Profile Content */}
            <div className="space-y-4">
              {/* LinkedIn Profile */}
              {selectedProfile.role && (
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-600 text-sm">{selectedProfile.company}</p>
                    <p className="text-blue-600 text-sm">{selectedProfile.location}</p>
                  </div>
                  <p className="text-gray-700">{selectedProfile.about}</p>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Experience: {selectedProfile.experience}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Instagram Profile */}
              {selectedProfile.handle && (
                <div className="space-y-3">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-pink-600 text-sm">{selectedProfile.followers} followers</p>
                  </div>
                  <p className="text-gray-700">Content: {selectedProfile.content}</p>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.highlights.map((highlight, index) => (
                        <span key={index} className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* GitHub Profile */}
              {selectedProfile.repos && (
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{selectedProfile.repos} repositories</p>
                    <p className="text-gray-600 text-sm">{selectedProfile.followers} followers</p>
                    <p className="text-gray-600 text-sm">{selectedProfile.contributions} contributions</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Top Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.topLanguages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Featured Projects:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.featuredProjects.map((project, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Linktree Profile */}
              {selectedProfile.links && (
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-600 text-sm">Theme: {selectedProfile.theme}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Available Links:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.links.map((link, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {link}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedProfile(null)}
                className="flex-1 px-4 py-2 text-gray-600 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => handleExternalLink(selectedProfile.link)}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
