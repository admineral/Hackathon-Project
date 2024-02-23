import React from 'react';

const GradientDefs: React.FC = () => {
  return (
    <defs>
      <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="420" y1="275" x2="420" y2="167" gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.464" stopOpacity="0.2"/>
        <stop offset="0.9" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="420" y1="325" x2="420" y2="117.001" gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.464" stopOpacity="0.2"/>
        <stop offset="1" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="420" y1="382" x2="420" y2="60.001" gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.464" stopOpacity="0.16"/>
        <stop offset="0.9" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="gradient-4" gradientUnits="userSpaceOnUse" x1="420" y1="488.788" x2="420" y2="-46.967" gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.089" stopOpacity="0.1"/>
        <stop offset="0.464" stopOpacity="0.27"/>
        <stop offset="0.896" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="gradient-5" gradientUnits="userSpaceOnUse" x1="420" y1="610" x2="420" y2="-168.179" gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.172" stopOpacity="0"/>
        <stop offset="0.464" stopOpacity="0.21"/>
        <stop offset="0.771" stopOpacity="0"/>
      </linearGradient>
      {/* Add any additional gradients here */}
    </defs>
  );
};

export default GradientDefs;