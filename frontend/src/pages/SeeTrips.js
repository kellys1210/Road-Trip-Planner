import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TripList from "../components/tripList.js";
import { GrAdd, GrEdit, GrTrash } from "react-icons/gr";

const SeeTrips = () => {
  const redirect = useNavigate();

  // Use state to store trips data
  const [trips, setTrips] = useState([]);

  // RETRIEVE the entire list of trips
  const loadTrips = async () => {
    try {
      const response = await fetch("/plantrip"); // Assuming your backend endpoint is "/api/plantrip"
      if (!response.ok) {
        throw new Error("Failed to fetch trips");
      }
      const tripsData = await response.json();
      setTrips(tripsData);
    } catch (error) {
      console.error("Error loading trips:", error);
    }
  };

  // UPDATE a single trip
  const onEditTrip = (trip) => {
    // Implement edit functionality as needed
    console.log("Edit trip:", trip);
  };

  // DELETE a single trip
  const onDeleteTrip = async (_id) => {
    try {
      const response = await fetch(`/plantrip/${_id}`, { method: "DELETE" }); // Adjust the DELETE endpoint
      if (response.ok) {
        loadTrips(); // Reload trips after successful deletion
      } else {
        throw new Error(`Failed to delete trip with ID ${_id}`);
      }
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  // LOAD all the trips when the component mounts
  useEffect(() => {
    loadTrips();
  }, []);

  console.log(trips);
  return (
    <div>
      <h2>List of Trips</h2>
      <p>
        This is a list of trips that you have planned. It includes the
        destination, start date, and end date of each trip.
      </p>
      <Link to="/create">
        {" "}
        <GrAdd />
      </Link>{" "}
      Add New Trip
      <TripList trips={trips} onEdit={onEditTrip} onDelete={onDeleteTrip} />
      </div>
  );
};


export default SeeTrips
