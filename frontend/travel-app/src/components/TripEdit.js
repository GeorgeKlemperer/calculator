import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

function TripEdit() {
  const { id } = useParams();
  const { trips, updateTrips } = useContext(AppContext);
  const navigate = useNavigate();

  const tripToEdit = trips.find((t) => t.id === parseInt(id));

  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (tripToEdit) {
      setName(tripToEdit.name);
      setDestination(tripToEdit.destination);
      setDate(tripToEdit.date);
    }
  }, [tripToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !destination || !date) {
      setError('All fields are required.');
      return;
    }
    const updatedTrip = { id: tripToEdit.id, name, destination, date };
    const updatedTrips = trips.map((trip) =>
      trip.id === tripToEdit.id ? updatedTrip : trip
    );
    updateTrips(updatedTrips);
    alert(`Trip ${id} updated`);
    navigate(`/trips/${id}`);
  };

  if (!tripToEdit) {
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
    <Container style={{ maxWidth: '600px', padding: '20px' }} data-testid="trip-edit-form">
      <h2>Edit Trip</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTripName" className="mb-3">
          <Form.Label>Trip Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter trip name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            data-testid="trip-name-input"
          />
        </Form.Group>

        <Form.Group controlId="formDestination" className="mb-3">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            data-testid="destination-input"
          />
        </Form.Group>

        <Form.Group controlId="formDate" className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            data-testid="date-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" data-testid="save-button">
          Save Changes
        </Button>
        <Button as={Link} to={`/trips/${id}`} variant="secondary" style={{ marginLeft: '10px' }} data-testid="cancel-button">
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default TripEdit;
