// Home.js
import React from 'react';
import Header from './LandingPage_Components/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';
import orbsData from './Orbit_Components/orbsData';

export default function Home() {
  const orbits = [75, 125, 180];
  const orbSizes = ['10', '20', '30']; // Define orb sizes here

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <OrbitAnimation orbits={orbits} orbsData={orbsData} orbSizes={orbSizes} />
      </div>
    </>
  );
}