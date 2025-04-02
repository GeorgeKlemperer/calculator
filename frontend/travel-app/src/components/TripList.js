import React from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TripList() {
  // Placeholder data for trips
  const trips = [
    { id: 1, name: 'Trip to Paris' },
    { id: 2, name: 'Trip to New York' },
    { id: 3, name: 'Trip to Tokyo' },
  ];

  return (
    <Container style={{ padding: '20px' }}>
      <h2>Trip List</h2>
      <ListGroup>
        {trips.map((trip) => (
          <ListGroup.Item key={trip.id}>
            <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
            <Button
              variant="secondary"
              size="sm"
              style={{ float: 'right' }}
              as={Link}
              to={`/trips/${trip.id}/edit`}
            >
              Edit
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TripList;
