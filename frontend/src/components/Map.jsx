import React, { useEffect, useRef } from 'react';

const Map = ({ originPlaceId, destinationPlaceId }) => {
  const mapRef = useRef(null);
  const directionsRenderer = useRef(null);

  useEffect(() => {
    if (!originPlaceId || !destinationPlaceId) return;

    const initializeMap = () => {
      const { google } = window;
      if (!google || !google.maps) {
        console.error('Google Maps API not loaded.');
        return;
      }

      console.log('Initializing map...');
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 39.900898, lng: -75.168098 }, 
        zoom: 10,
      });

      const placesService = new google.maps.places.PlacesService(map);
      directionsRenderer.current = new google.maps.DirectionsRenderer();
      directionsRenderer.current.setMap(map);

      const getPlaceDetails = (placeId) => {
        return new Promise((resolve, reject) => {
          placesService.getDetails({ placeId }, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              resolve(result);
            } else {
              reject(status);
            }
          });
        });
      };

      Promise.all([getPlaceDetails(originPlaceId), getPlaceDetails(destinationPlaceId)])
        .then(([originResult, destinationResult]) => {
          const directionsService = new google.maps.DirectionsService();
          directionsService.route(
            {
              origin: originResult.geometry.location,
              destination: destinationResult.geometry.location,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.current.setDirections(response);
                map.setCenter(originResult.geometry.location);
                map.setZoom(14); 
              } else {
                console.error('Error fetching directions:', status);
              }
            }
          );
        })
        .catch((error) => {
          console.error('Error fetching place details:', error);
        });
    };

    initializeMap();
  }, [originPlaceId, destinationPlaceId]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;








