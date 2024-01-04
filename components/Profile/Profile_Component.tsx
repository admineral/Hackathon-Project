"use client"
import Image from "next/legacy/image";
import React, { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import { profileCards } from '../../Data/profileCardsData';
import { Product } from "modules/products";
import { fetchData } from "next-auth/client/_utils";
import { Items } from "@azure/cosmos";


const ProfileComponent = () => {
  const [products, setProducts] = useState([]); // Zustand für deine Daten

  // Funktion zum Laden der Daten
  const loadData = async () => {
    const response = await fetch('../../app/api/route.ts');
    if (!response.ok) {
      console.error('Fehler beim Laden der Daten');
      return;
    }
    const fetchedData = await response.json();
    setProducts(fetchedData); // Aktualisiere den Zustand mit den geladenen Daten
  };

  // Lade Daten beim Initialisieren der Komponente
  useEffect(() => {
    loadData();
  }, []);
 
  
  return (
    <div className="text-black"> 
      <div className="flex flex-col items-center py-6">
        <Image
          src="/peter.png"
          alt="Profile"
          className="rounded-full"
          width={80}
          height={80}
          objectFit="cover"
        />
        <h1 className="text-3xl font-bold mt-2">Peter Pilz</h1>
        <p className="text-sm mt-1">Beigetreten vor 6 Jahren</p>
        <div className="flex space-x-10 mt-4">
          <div>
            <div className="text-xl font-semibold">{products}</div>
            <div className="text-sm">FOLLOWERS</div> 
          </div>
          <div>
            <div className="text-xl font-semibold">8647</div>
            <div className="text-sm">BOOSTS</div> 
          </div>
          <div>
            <div className="text-xl font-semibold">212</div>
            <div className="text-sm">POSTS</div> 
          </div>
        </div>
      </div>
      <div className="flex justify-between px-6 mt-4">
    
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {profileCards.map((card, index) => (
          <ProfileCard
            key={index}
            title={card.title}
            description={card.description}
            author={card.author}
            date={card.date}
            comments={card.comments}
            likes={card.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileComponent;