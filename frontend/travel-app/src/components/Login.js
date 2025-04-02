import React, { useContext, useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

function Login() {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (email === 'user@example.com' && password === 'password') {
      const userData = { name: 'John Doe', email };
      login(userData);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '50px' }}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} data-testid="login-form">
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" data-testid="login-button">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
