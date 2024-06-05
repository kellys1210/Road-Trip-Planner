import React, { useEffect } from "react";
import { DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const Map = ({ origin, destination }) => {
    console.log("origin", origin);
    console.log("destination", destination);
    useEffect(() => {
        const mapContainer = document.getElementById("map");
        if (!mapContainer) return; 

        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        new window.google.maps.Map(mapContainer, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 },
        });

        if (origin && destination) {
            directionsService.route(
                {
                    origin: origin,
                    destination: destination,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (response, status) => {
                    if (status === "OK") {
                        directionsRenderer.setDirections(response);
                    } else {
                        window.alert("Directions request failed due to " + status);
                    }
                }
            );
        } else {
            window.alert("Invalid origin or destination.");
        }
    }, [origin, destination]);

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <div id="map" style={{ height: "100%", width: "100%" }} />
        </div>

    );
};

export default Map;
