import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import WeatherWidget from "./Weather.jsx";
import Map from "./Map.jsx"

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/plantrip/${id}`)
      .then((response) => setTrip(response.data))
      .catch((error) => setError(error)); // Handle error
  }, [id]);

  if (error) return "Error: " + error.message;

  if (!trip) return "Loading...";

  // Calculate length of trip:
  const lengthEndDate = new Date(trip.endDate);
  const lengthStartDate = new Date(trip.startDate);
  const tripLength = Math.floor(
    (lengthEndDate - lengthStartDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <h2>Trip to {trip.destination}</h2>
      <p> Planned Departure Date: {trip.startDate.slice(0, 10)}</p>
      <p>Estimated Arrival Date: {trip.endDate.slice(0, 10)}</p>
      <p>Trip Length: {tripLength} days</p>
        <Map origin={trip.origin} destination={trip.destination} />{" "}
    
      {/* <p><WeatherWidget city={trip.destination} /></p> */}
      <Link to="/seetrips">
        <Button className="tripButton">Back to Planned Trips</Button>
      </Link>
    </div>
  );
};

export default TripDetails;
