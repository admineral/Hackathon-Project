import React from 'react';
import MapBox from '../../components/Map/Map_Component';

const Page: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <MapBox />
    </div>
  );
}

export default Page;