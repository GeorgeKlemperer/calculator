import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

function TripDashboard() {
  const { id } = useParams();
  const { trips } = useContext(AppContext);

  const trip = trips.find((t) => t.id === parseInt(id));

  if (!trip) {
    return (
      <Container style={{ padding: '20px' }}>
        <Alert variant="warning">Trip not found.</Alert>
        <Button as={Link} to="/trips" variant="secondary">
          Back to Trip List
        </Button>
      </Container>
    );
  }

  return (
    <Container style={{ padding: '20px' }} data-testid="trip-dashboard">
      <h2>Trip Dashboard</h2>
      <p><strong>Trip ID:</strong> {trip.id}</p>
      <p><strong>Name:</strong> {trip.name}</p>
      <p><strong>Destination:</strong> {trip.destination}</p>
      <p><strong>Date:</strong> {trip.date}</p>
      {/* Add more trip details and functionalities here */}
      <Button as={Link} to={`/trips/${id}/edit`} variant="primary" data-testid="edit-trip-button">
        Edit Trip
      </Button>
      <Button as={Link} to="/trips" variant="secondary" style={{ marginLeft: '10px' }} data-testid="back-to-list-button">
        Back to Trip List
      </Button>
    </Container>
  );
}

export default TripDashboard;
