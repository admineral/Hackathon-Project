// Home.js
import React from 'react';
import Header from './LandingPage_Components/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';
import orbsData from './Orbit_Components/orbsData';
import RoadmapList from './Roadmap/page';

export default function Home() {
  const orbits = [55, 110, 180];

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <OrbitAnimation orbits={orbits} orbsData={orbsData} />
      </div>
      <RoadmapList />
    </>
  );
}