import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import TripList from "../components/tripList";

function SeeTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("http://localhost:5000/plantrip");
        if (!response.ok) {
          throw new Error("Failed to fetch trips");
        }
        const tripsData = await response.json();
        setTrips(tripsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const tripDelete = async (id) => {
    try {
      // Call backend API to delete trip
      const response = await fetch(`http://localhost:5000/plantrip/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete trip");
      }
      // Remove deleted trip from state
      setTrips(trips.filter((trip) => trip._id !== id));
    } catch (error) {
      console.error("Error deleting trip:", error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Planned Trips</h2>
      <Link to="/createtrip">
        <Button className="tripButton">Plan a New Trip</Button>
      </Link>
      <TripList trips={trips} onDelete={tripDelete} />
    </div>
  );
}


export default SeeTrips;
