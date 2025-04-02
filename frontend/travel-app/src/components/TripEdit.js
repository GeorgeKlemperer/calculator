import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

function TripEdit() {
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle trip update logic here
    alert(`Trip ${id} updated`);
  };

  return (
    <Container style={{ maxWidth: '600px', padding: '20px' }}>
      <h2>Edit Trip</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTripName" className="mb-3">
          <Form.Label>Trip Name</Form.Label>
          <Form.Control type="text" placeholder="Enter trip name" defaultValue={`Trip ${id}`} required />
        </Form.Group>

        <Form.Group controlId="formDestination" className="mb-3">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" placeholder="Enter destination" required />
        </Form.Group>

        <Form.Group controlId="formDate" className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
        <Button as={Link} to={`/trips/${id}`} variant="secondary" style={{ marginLeft: '10px' }}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default TripEdit;
