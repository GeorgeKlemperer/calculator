import React, { useContext } from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function TripList() {
  const { trips } = useContext(AppContext);

  return (
    <Container style={{ padding: '20px' }} data-testid="trip-list">
      <h2>Trip List</h2>
      <ListGroup>
        {trips.length === 0 ? (
          <ListGroup.Item>No trips available.</ListGroup.Item>
        ) : (
          trips.map((trip) => (
            <ListGroup.Item key={trip.id} data-testid={`trip-item-${trip.id}`}>
              <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
              <Button
                variant="secondary"
                size="sm"
                style={{ float: 'right' }}
                as={Link}
                to={`/trips/${trip.id}/edit`}
                data-testid={`edit-button-${trip.id}`}
              >
                Edit
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
}

export default TripList;
