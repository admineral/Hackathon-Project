// @ts-nocheck

"use client"
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './globals.css';
import supercluster from 'supercluster';
import {points} from './data';


export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  mapboxgl.accessToken ='pk.eyJ1Ijoibmdqb2thaiIsImEiOiJjbHExZTJpMWMwOGJlMnBxdmltZWttZ2NrIn0.oCiHHe3QRM1hEqIjX0hH4A';

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [13.4050, 47.7511], // zentrierung auf Österreich
      zoom: 6,
    });

    map.current.on('load', () => {
      updateMarkers();
    });

    map.current.on('move', updateMarkers);

    return () => {
      map.current.remove();
    };
  }, []);

  useEffect(() => {
    updateMarkers();
  }, [points]);

  function updateMarkers() {
    if (!map.current || points.length === 0) return;

    const cluster = new supercluster({
      radius: 40,
      maxZoom: 16
    });

    cluster.load(points.map(point => ({
      type: 'Feature',
      properties: { title: point.title, description: point.description },
      geometry: { type: 'Point', coordinates: point.coordinates }
    })));

    const zoom = map.current.getZoom();
    const bounds = map.current.getBounds();
    const bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
    const clusters = cluster.getClusters(bbox, Math.floor(zoom));

    clusters.forEach(cluster => {
      const [longitude, latitude] = cluster.geometry.coordinates;
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';

      new mapboxgl.Marker(markerElement)
        .setLngLat([longitude, latitude])
        .addTo(map.current)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3>${cluster.properties.title}</h3><p>${cluster.properties.description}</p>`));
    });
  }

  return <div style={{ height: '100vh' }} ref={mapContainer} />;
}