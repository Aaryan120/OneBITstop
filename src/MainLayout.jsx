// src/MainLayout.jsx
import React from 'react';
import Navbar from './connectingcomponents/Navbar';
import HeroSection from './connectingcomponents/HeroSection';
import BITListings from './connectingcomponents/BITListings';
import LostAndFound from './connectingcomponents/LostAndFound';
import HopBIT from './connectingcomponents/HopBIT';
import AttendancePreview from './connectingcomponents/AttendancePreview';
import BITMesraInfo from './connectingcomponents/BITMesraInfo';
// import Footer from './connectingcomponents/Footer';
import ClubStrip from './connectingcomponents/ClubStrip';
// import LayoutGridDemo from './components/ui/layout-grid-demo';

const MainLayout = () => {
  return (
    <>
      <HeroSection />
      <ClubStrip />
      
      <LostAndFound />
      <HopBIT />
      {/* <SellBuySection /> */}
      <BITListings />
      <AttendancePreview />
      <BITMesraInfo />
    </>
  );
};

export default MainLayout;
