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
import { motion } from "framer-motion";

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
          id: "Raj_aaryan10",
          name: "Raj Aryan",
          handle: "@raj_aaryan10",
          followers: "300+",
          content: "Personal Instagram",
          highlights: ["Personal", "Lifestyle", "Campus Life"],
          link: "https://www.instagram.com/raj_aaryan10"
        },

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
          id: "Aaryan120",
          name: "Raj Aryan",
          repos: "15+",
          followers: "30+",
          contributions: "150+",
          topLanguages: ["TypeScript", "React", "Nodejs"],
          featuredProjects: ["UI Components", "Portfolio", "Blog"],
          link: "https://github.com/Aaryan120"
        },
        
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
    setSelectedPlatform(null);
  };

  const closePopup = () => {
    setSelectedProfile(null);
    setSelectedPlatform(null);
  };

  const handleBackToPlatform = () => {
    setSelectedProfile(null);
    // Don't set selectedPlatform to null here, keep it open
  };

  const handleExternalLink = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    closePopup();
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Updates', href: '/updates' }
    ],
    support: [
      { name: 'Documentation', href: '/docs' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Data Protection', href: '/data-protection' }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-white dark:from-slate-900 dark:via-gray-900 dark:to-gray-900 text-gray-700 dark:text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/50 dark:[mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="OneBITstop Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Empowering students, digitally ✨
            </p>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} OneBITstop. All rights reserved. - Made with ❤️ by BITians for BITians
          </p>
          <div className="flex items-center space-x-4">
            {socialProfiles.map((platform, index) => (
              <motion.button
                key={platform.id}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleProfileClick(platform)}
                className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/70 dark:hover:bg-gray-600/70"
                aria-label={`Visit our ${platform.name}`}
              >
                <platform.icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pop-up for platform selection */}
      {selectedPlatform && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">Select a Profile</h3>
            <div className="space-y-3">
              {selectedPlatform.profiles.map((profile) => (
                <motion.button
                  key={profile.id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => handleProfileSelect(profile)}
                  className="w-full text-left p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <span className="font-semibold text-gray-800 dark:text-white">{profile.name}</span>
                  {profile.role && <p className="text-sm text-gray-500 dark:text-gray-400">{profile.role}</p>}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Pop-up for profile details */}
      {selectedProfile && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <motion.div
             initial={{ scale: 0.9, y: 20 }}
             animate={{ scale: 1, y: 0 }}
             exit={{ scale: 0.9, y: 20 }}
             transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-lg relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex flex-col items-center text-center"
            >
              <motion.img
                variants={itemVariants}
                src={`https://ui-avatars.com/api/?name=${selectedProfile.name.replace(/\s/g, '+')}&background=random`}
                alt={selectedProfile.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700"
              />
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProfile.name}</motion.h3>
              {selectedProfile.role && <motion.p variants={itemVariants} className="text-md text-gray-600 dark:text-gray-400">{selectedProfile.role} @ {selectedProfile.company}</motion.p>}
              {selectedProfile.handle && <motion.p variants={itemVariants} className="text-md text-gray-500 dark:text-gray-400">{selectedProfile.handle}</motion.p>}
              <motion.p variants={itemVariants} className="text-sm text-gray-500 dark:text-gray-400 mt-1">{selectedProfile.location}</motion.p>
              
              <motion.div variants={itemVariants} className="my-6 w-full border-t border-gray-200 dark:border-gray-700" />
              
              {selectedProfile.about && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">About</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProfile.about}</p>
                </motion.div>
              )}
              {selectedProfile.experience && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProfile.experience}</p>
                </motion.div>
              )}
              {selectedProfile.skills && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfile.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              {selectedProfile.followers && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Followers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProfile.followers}</p>
                </motion.div>
              )}
              {selectedProfile.content && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Content</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProfile.content}</p>
                </motion.div>
              )}
              {selectedProfile.highlights && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfile.highlights.map((highlight, index) => (
                      <span key={index} className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              {selectedProfile.repos && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Repositories</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProfile.repos}</p>
                </motion.div>
              )}
              {selectedProfile.contributions && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Contributions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProfile.contributions}</p>
                </motion.div>
              )}
              {selectedProfile.topLanguages && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Top Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfile.topLanguages.map((lang, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              {selectedProfile.featuredProjects && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Featured Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfile.featuredProjects.map((project, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              {selectedProfile.theme && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Theme</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProfile.theme}</p>
                </motion.div>
              )}
              {selectedProfile.links && (
                <motion.div variants={itemVariants} className="text-left w-full mb-4">
                  <h4 className="font-semibold mb-1 text-gray-800 dark:text-white">Available Links</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfile.links.map((link, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {link}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.button
                variants={itemVariants}
                onClick={() => handleExternalLink(selectedProfile.link)}
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                View Full Profile
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 20 } }
};

export default Footer;
