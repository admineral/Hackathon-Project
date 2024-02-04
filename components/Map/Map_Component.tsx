"use client"
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'styles/Map.css';
import supercluster from 'supercluster';
import { points } from '../../Data/Mapdata';


interface ClusterProperties {
  title: string;
  description: string;
}

const MapBox = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  mapboxgl.accessToken = 'pk.eyJ1Ijoibmdqb2thaiIsImEiOiJjbHExZTJpMWMwOGJlMnBxdmltZWttZ2NrIn0.oCiHHe3QRM1hEqIjX0hH4A';

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [13.4050, 47.7511], //center Austria
      zoom: 6,
      minZoom: 6,
    });

    map.current.on('load', () => {
      // Nachdem die Karte geladen ist, fügen Sie die Heatmap hinzu
      map.current.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: points.map(point => ({
            type: 'Feature',
            properties: {
              // Hier können Sie zusätzliche Eigenschaften hinzufügen, die für die Heatmap verwendet werden
            },
            geometry: {
              type: 'Point',
              coordinates: point.coordinates
            }
          }))
        }
      });
  
      map.current.addLayer({
        id: 'heatmap',
        type: 'heatmap',
        source: 'points',
        maxzoom: 15,
        paint: {
          // Hier können Sie die Farben und Intensität der Heatmap anpassen
          'heatmap-weight': {
            property: 'mag',
            type: 'exponential',
            stops: [
              [0, 0],
              [6, 1]
            ]
          },
          'heatmap-intensity': {
            stops: [
              [0, 1],
              [5, 3]
            ]
          },
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, '',
            0.5, 'yellow',
            1, 'red'
          ],
          'heatmap-radius': {
            stops: [
              [0, 2],
              [5, 10]
            ]
          },
          'heatmap-opacity': {
            default: 1,
            stops: [
              [14, 1],
              [15, 0]
            ]
          },
        }
      });
    });
    locateUser();
    map.current.on('move', updateMarkers);

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
      const properties = cluster.properties as ClusterProperties;
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';

      if (properties.cluster) {
        markerElement.innerHTML = `<div class="cluster-marker"> ${properties.point_count_abbreviated} </div>`;
      } else {
        // Customize this part to match the design in your screenshot
        markerElement.innerHTML = `
  <div class="custom-marker">
   <img alt="Profile image for ${properties.title}" class="marker-image" height="50" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-HzIg0SKXLTn7ZpAly4ATVzJ5/user-FlN3Lv60trbYrQtR5frN5TSj/img-120AXYxhziHdOaMISRJzpnl4.png?st=2023-12-20T11%3A58%3A13Z&amp;se=2023-12-20T13%3A58%3A13Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-12-20T01%3A23%3A51Z&amp;ske=2023-12-21T01%3A23%3A51Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=u3K36YgbZJK0QyDdxoLpsnaOL/QJrnQewQJzxvfIg4E%3D" width="50"/>
   <div class="marker-content">
    <div class="marker-title">
     ${properties.title}
    </div>
    <div class="marker-description">
     ${properties.description}
    </div>
   </div>
  </div>
  `;
      }

      if (map.current) {
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat([longitude, latitude])
          .addTo(map.current)
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>
            ${properties.title}
           </h3>
           <p>
            ${properties.description}
           </p>
           `));

        markers.current.push(marker);
      }
    });
  }
  function locateUser() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        map.current.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 10
        });
      }, (error) => {
        console.error('Error getting the geolocation', error);
      });
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  }


  return <div style={{ height: '100vh' }} ref={mapContainer} />;
}

export default MapBox;