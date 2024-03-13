"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import OrbitAnimation from '../../components/Blackhole/Orbit_Component';
import StarsCanvas from '../../components/Star/StarBackground';
import { Gist } from "@/components/News/gist";
import styles from './Page.module.css';

export default function Page() {
  const [leftBoxWidth, setLeftBoxWidth] = useState<string>('42%');
  const [isLeftBoxOpen, setIsLeftBoxOpen] = useState<boolean>(true);

  const startResizing = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Verhindert das Ziehen von Bildern oder Text
    const startX = e.clientX;
    // Stellen Sie sicher, dass parentNode ein HTMLElement ist, bevor Sie darauf zugreifen
    const parentElement = e.currentTarget.parentNode as HTMLElement;
    const startWidth = parentElement ? parentElement.offsetWidth : 0;
  
    const doDrag = (e: MouseEvent) => {
      const newWidth = startWidth + e.clientX - startX;
      setLeftBoxWidth(`${Math.max(newWidth, 10)}px`); // Mindestbreite von 10px, um vollständiges Verschwinden zu verhindern
    };
  
    const stopDrag = () => {
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
    };
  
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
  };

  const toggleLeftBox = () => {
    setIsLeftBoxOpen(!isLeftBoxOpen);
    setLeftBoxWidth(isLeftBoxOpen ? '0%' : '45%');
  };

  return (
    <div className={styles.fullScreenCenter}>
      <Head>
        <title>Orbit Animation</title>
      </Head>
      <div className={styles.leftBox} style={{ width: leftBoxWidth }}>
        <div className={styles.resizeHandle} onMouseDown={startResizing}></div>
        <button className={styles.toggleButton} onClick={toggleLeftBox}>
          {isLeftBoxOpen ? '→' : '←'}
        </button>
        <Gist currentClusterID="3916e1de-38d4-4155-8a61-056e889b6d6c" />
      </div>
      <div className={styles.content}>
        <StarsCanvas />
        <OrbitAnimation />
      </div>
    </div>
  );
}