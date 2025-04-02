import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function TripDashboard() {
  const { id } = useParams();

  return (
    <Container style={{ padding: '20px' }}>
      <h2>Trip Dashboard</h2>
      <p>Details for Trip ID: {id}</p>
      {/* Add more trip details and functionalities here */}
      <Button as={Link} to={`/trips/${id}/edit`} variant="primary">
        Edit Trip
      </Button>
      <Button as={Link} to="/trips" variant="secondary" style={{ marginLeft: '10px' }}>
        Back to Trip List
      </Button>
    </Container>
  );
}

export default TripDashboard;
