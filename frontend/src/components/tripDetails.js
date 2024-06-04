import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/plantrip/${id}`)
      .then((response) => response.json())
      .then((data) => setTrip(data));
  }, [id]);

  if (!trip) return "Loading...";

  // Calculate length of trip:
  const lengthEndDate = new Date(trip.endDate);
  const lengthStartDate = new Date(trip.startDate);
  const tripLength = Math.floor(
    (lengthEndDate - lengthStartDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <h2>{trip.destination}</h2>
      <p>Start Date: {trip.startDate.slice(0, 10)}</p>
      <p>End Date: {trip.endDate.slice(0, 10)}</p>
      <p>Trip Length: {tripLength} days</p>
      <Link to="/seetrips">
        <Button className="tripButton">Back to Planned Trips</Button>
      </Link>
    </div>
  );
};

export default TripDetails;
