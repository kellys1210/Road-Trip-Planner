import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PlaceAuto from "./PlaceAuto";

const EditTrip = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [trip, setTrip] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/plantrip/${id}`);
        const tripData = response.data;
        
        tripData.startDate = new Date(tripData.startDate).toISOString().split('T')[0];
        tripData.endDate = new Date(tripData.endDate).toISOString().split('T')[0];

        setTrip(tripData);
      } catch (error) {
        console.error("Error fetching trip:", error);
      }
    };

    fetchTrip();
  }, [id]);

  const handleChange = (event) => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const handleSelectAddress = (address, placeId, type) => {
    if (type === "origin") {
      setTrip({ ...trip, origin: address, originPlaceId: placeId });
    } else if (type === "destination") {
      setTrip({ ...trip, destination: address, destinationPlaceId: placeId });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!trip.origin || !trip.destination || !trip.startDate || !trip.endDate) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/plantrip/${id}`, trip);

      if (response.status === 200) {
        alert("Trip updated successfully");
        navigate("/seetrips");
      } else {
        throw new Error("Failed to update trip");
      }
    } catch (error) {
      console.error("Error updating trip:", error);
      alert("Failed to update trip");
    }
  };

  return (
    <div>
      <h1>Edit Trip</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="origin">
          <Form.Label>Origin</Form.Label>
          <PlaceAuto
            handleSelectAddress={handleSelectAddress}
            type="origin"
            initialValue={trip.origin}
          />
        </Form.Group>
        <Form.Group controlId="destination">
          <Form.Label>Destination</Form.Label>
          <PlaceAuto
            handleSelectAddress={handleSelectAddress}
            type="destination"
            initialValue={trip.destination}
          />
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={trip.startDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={trip.endDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="tripButton" type="submit">
          Update Trip
        </Button>
      </Form>
    </div>
  );
};

export default EditTrip;


