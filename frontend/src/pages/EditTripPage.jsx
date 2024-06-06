import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditTrip from '../components/editTrip.jsx'

const EditTripPage = () => {
    const { id } = useParams(); // Get the trip ID from URL parameter
    const [trip, setTrip] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrip = async () => {
            if (!id) {
                setError('Trip ID is missing');
                setLoading(false);
                return;
            }

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
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <EditTrip trip={trip} />
        </div>
    );
};

export default EditTripPage;


