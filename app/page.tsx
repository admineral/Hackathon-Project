// Home.js
import React from 'react';
import Header from './LandingPage_Components/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';

export default function Home() {
  // Define multiple orbit sizes with increased inner orbit size
  const orbits = [75, 130, 190];

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <OrbitAnimation orbits={orbits} />
      </div>
    </>
  );
}