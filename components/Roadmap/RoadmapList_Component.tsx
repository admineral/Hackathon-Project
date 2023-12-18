"use client"
import React from 'react';
import { roadmapItemsData } from '../../Data/roadmapData'; // Assuming you moved roadmapData to a data folder
import RoadmapItem from './components/RoadmapItem';

// Parent component that renders a list of RoadmapItem components
const RoadmapList = () => {
    return (
      <div className="container mx-auto px-4 py-8 space-y-4">
        {roadmapItemsData.map((item) => (
          <RoadmapItem key={item.id} item={item} />
        ))}
      </div>
    );
};

export default RoadmapList;