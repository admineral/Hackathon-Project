"use client"
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'styles/Map.css';
import supercluster from 'supercluster';
import { points } from '../../Data/Mapdata';

interface Point {
  title: string;
  description: string;
  coordinates: [number, number];
}

interface ClusterProperties {
  title: string;
  description: string;
}

const MapBox = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  mapboxgl.accessToken ='pk.eyJ1Ijoibmdqb2thaiIsImEiOiJjbHExZTJpMWMwOGJlMnBxdmltZWttZ2NrIn0.oCiHHe3QRM1hEqIjX0hH4A';

  useEffect(() => {
    if (!mapContainer.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [13.4050, 47.7511], //center Austria
      zoom: 6,
    });

    map.current.on('load', updateMarkers);
    map.current.on('move', updateMarkers);

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    updateMarkers();
  }, [points]); // Add points as a dependency if it's dynamic

  function updateMarkers() {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    const cluster = new supercluster({
      radius: 40,
      maxZoom: 16
    });

    cluster.load(points.map((point: { coordinates: number[]; title: string; description: string; }) => ({
        type: 'Feature',
        properties: { title: point.title, description: point.description },
        geometry: { type: 'Point', coordinates: point.coordinates as [number, number] }
      })));

    const zoom = map.current.getZoom();
    const bounds = map.current.getBounds();
    const bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()] as [number, number, number, number];
    const clusters = cluster.getClusters(bbox, Math.floor(zoom));

    clusters.forEach(cluster => {
      const [longitude, latitude] = cluster.geometry.coordinates;
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';

      if (map.current) {
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat([longitude, latitude])
          .addTo(map.current)
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>${(cluster.properties as ClusterProperties).title}</h3><p>${(cluster.properties as ClusterProperties).description}</p>`));
      
        markers.current.push(marker);
      }
    });
  }

  return <div style={{ height: '100vh' }} ref={mapContainer} />;
}

export default MapBox;