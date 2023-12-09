// Home.js


import React from 'react';
import Header from './LandingPage_Components/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';

export default function Home() {
  // Define multiple orbit sizes with increased inner orbit size
  const orbits = [100, 150, 230]; // Updated radii of the orbits with more space for the inner circle

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        {/* CentralCircle representing the black hole */}
        <div className="relative w-32 h-32 bg-black rounded-full" style={{ margin: 'auto' }}>
          <OrbitAnimation orbits={orbits} />
        </div>
      </div>
    </>
  );
}