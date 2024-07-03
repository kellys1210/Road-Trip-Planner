
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PlaceAuto from "./PlaceAuto";

const CreateTrip = () => {
    const navigate = useNavigate();
    const [trip, setTrip] = useState({ 
        origin: "",
        originPlaceId: "",
        destination: "",
        destinationPlaceId: "",
        startDate: "",
        endDate: "",
    });

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
            const response = await axios.post("http://localhost:5000/plantrip", trip);

            if (response.status === 201) {
                alert("Trip created successfully");
                navigate("/seetrips");
            } else {
                throw new Error("Failed to create trip");
            }
        } catch (error) {
            console.error("Error creating trip:", error);
            alert("Failed to create trip");
        }
    };

    return (
        <div>
            <h1>Create a New Trip</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="origin">
                    <Form.Label>Origin</Form.Label>
                    <PlaceAuto
                        handleSelectAddress={handleSelectAddress}
                        type="origin"
                    />
                </Form.Group>
                <Form.Group controlId="destination">
                    <Form.Label>Destination</Form.Label>
                    <PlaceAuto
                        handleSelectAddress={handleSelectAddress}
                        type="destination"
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
                <Button className="tripButton" type="submit" onClick={handleSubmit}>
                    Create Trip
                </Button>
            </Form>
        </div>
    );
};

export default CreateTrip;

