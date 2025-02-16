import React, { useEffect, useState } from "react";
import styles from "../../css/style_sedes.module.css";

export default function Mapa({ allMarkers, filteredMarkers, selectedCoordinates }) {
  const [map, setMap] = useState(null);
  const [currentMarkers, setCurrentMarkers] = useState([]);

  useEffect(() => {
    
    const initMap = () => {
      const mapOptions = {
        center: { lat: -12.0515179, lng: -77.02190145 },
        zoom: 15, 
      };

      const newMap = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      setMap(newMap);

      allMarkers.forEach((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: marker.position,
          map: newMap,
          title: marker.title,
        });

        setCurrentMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      });
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCWJ9fvLZAL_I_vtMDFwptCXK9P2MIyncM&libraries=places&callback=initMap`;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);
    
    return () => {
      delete window.initMap;
    };
    
  }, [allMarkers]);
  useEffect(() => {
    if (selectedCoordinates) {
      console.log('Coordenadas seleccionadas:', selectedCoordinates);
    }

  }, [ map , selectedCoordinates]);
  useEffect(() => {
    if (map) {
      currentMarkers.forEach((marker) => {
        marker.setMap(null);
      });
  
      filteredMarkers.forEach((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: marker.position,
          map: map,
          title: marker.title,
        });
  
        setCurrentMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      });
  
      if (filteredMarkers.length > 0) {
        const bounds = new window.google.maps.LatLngBounds();
        
        if (filteredMarkers.length >= 1 && filteredMarkers.length < 3) {
          filteredMarkers.forEach((marker) => {
            bounds.extend(marker.position);
          });
          map.fitBounds(bounds);
          map.setZoom(15); 
        } else if (filteredMarkers.length > 3) {
          filteredMarkers.forEach((marker) => {
            bounds.extend(marker.position);
          });
          map.fitBounds(bounds);
          map.setZoom(11.9);
        }
      }
    }
  }, [filteredMarkers, map, allMarkers]);
  useEffect(() => {
    if (map && selectedCoordinates) {
      const moveMapSmoothly = (newCoordinates) => {
        const startLat = map.getCenter().lat();
        const startLng = map.getCenter().lng();
        const endLat = newCoordinates.lat;
        const endLng = newCoordinates.lng;
  
        const delay = 15; 
    
        const deltaLat = (endLat - startLat);
        const deltaLng = (endLng - startLng);
        const steps = 5;
  
        let currentStep = 0;
        const moveStep = () => {
          const progress = currentStep / steps;
          const newLat = startLat + deltaLat * progress;
          const newLng = startLng + deltaLng * progress;
          const newPosition = new window.google.maps.LatLng(newLat, newLng);
          map.panTo(newPosition);
          
          currentStep++;
          if (currentStep <= steps) {
            setTimeout(moveStep, delay);
          }
        };
  
        moveStep();
      };
  
      moveMapSmoothly(selectedCoordinates);
      map.setZoom(14);
    } else if (map) {
      map.setCenter({ lat: -12.0515179, lng: -77.02190145 });
      map.setZoom(11);
    }
  }, [map, selectedCoordinates]);
  
  

  return <div id="map" className={styles.ContenedorMapa} style={{ height: "703px" }} />;
}
