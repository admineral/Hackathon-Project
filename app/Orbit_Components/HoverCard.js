import React from 'react';

export default function HoverCard({ headline, text }) {
  return (
    <div className="absolute w-64 p-4 bg-white rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105" style={{ zIndex: 1000 }}>
      <h3 className="font-bold text-lg mb-2">{headline}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}