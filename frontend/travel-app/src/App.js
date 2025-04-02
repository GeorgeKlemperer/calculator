import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import TripList from './components/TripList';
import TripDashboard from './components/TripDashboard';
import TripEdit from './components/TripEdit';
import { AppProvider, AppContext } from './context/AppContext';
import { Button } from 'react-bootstrap';

function Home() {
  const { user, logout } = useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user ? (
          <>
            <p>Welcome, {user.name}!</p>
            <Button variant="danger" onClick={logout} data-testid="logout-button">
              Logout
            </Button>
          </>
        ) : (
          <p>Please log in to manage your trips.</p>
        )}
      </header>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About Page</h2>
      <p>This is the About page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

// Protected Route Component
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AppContext);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AppProvider>
      <Router>
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
          <Link to="/trips">Trips</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/trips"
            element={
              <PrivateRoute>
                <TripList />
              </PrivateRoute>
            }
          />
          <Route
            path="/trips/:id"
            element={
              <PrivateRoute>
                <TripDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/trips/:id/edit"
            element={
              <PrivateRoute>
                <TripEdit />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
