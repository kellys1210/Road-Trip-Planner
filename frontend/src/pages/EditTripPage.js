import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditTrip from '../components/editTrip.js'

const EditTripPage = () => {
    const { id } = useParams(); // Get the trip ID from URL parameter
    const [trip, setTrip] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const response = await fetch(`http://localhost:5000/plantrip/${id}`); // Fetch the trip details based on ID
                if (!response.ok) {
                    throw new Error('Failed to fetch trip');
                }
                const tripData = await response.json();
                setTrip(tripData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchTrip();
    }, [id]); // Fetch trip details whenever the ID changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render TripForm component with trip details
    return (
        <div>
            <h2>Edit Trip</h2>
            <EditTrip trip={trip} />
        </div>
    );
};

export default EditTripPage;


