import React from "react";
import { clubs } from "../data/clubData";

const ClubStrip = () => {
  return (
    <div className="relative overflow-hidden py-4 border-y border-orange-300 bg-transparent backdrop-blur-md">
      {/* Background Text (placed on top with low opacity) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-950 opacity-30 drop-shadow-lg whitespace-nowrap">
          Vibrant Clubs of BIT Mesra
        </h2>
      </div>

      {/* Scrolling Clubs */}
      <div className="relative overflow-hidden">
        <div
          className="animate-scroll flex whitespace-nowrap items-center gap-4 sm:gap-6 px-3 sm:px-6 z-10"
          style={{ 
            willChange: "transform",
            width: "fit-content"
          }}
        >
          {/* Duplicate clubs to create seamless loop */}
          {[...clubs, ...clubs].map((club, idx) => (
            <a
              key={`${club.name}-${idx}`}
              href={club.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center transition-transform hover:scale-105 flex-shrink-0"
              aria-label={`Visit ${club.name} on Instagram`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-400 shadow-md bg-transparent flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://media.licdn.com/dms/image/v2/D560BAQGPEOosBTv6lQ/company-logo_200_200/company-logo_200_200/0/1689230267654?e=2147483647&v=beta&t=HkMzEwiqoYnJ_TqAmwHgkSkM7dh8GR-tCy0e15U-cRE";
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubStrip;
