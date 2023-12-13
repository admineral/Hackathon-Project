// app/page.tsx
import React from 'react';
import Header from './LandingPage_Components/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';
import orbsData from './Orbit_Components/orbsData';
import RoadmapList from './Roadmap/page';
import EditorPicks from './Editor_Picks/page'; 
import TopAuthors from './Top_Autors/page';

export default function Home() {
  const orbits = [55, 110, 180];

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <OrbitAnimation orbits={orbits} orbsData={orbsData} />
      </div>
      <EditorPicks />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}> {/* Add a div with flex and justifyContent: 'flex-start' */}
        <TopAuthors />
      </div>
      <RoadmapList />
    </>
  );
}