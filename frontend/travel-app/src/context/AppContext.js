import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // State for user authentication
  const [user, setUser] = useState(null);

  // State for trip data
  const [trips, setTrips] = useState([
    { id: 1, name: 'Trip to Paris', destination: 'Paris, France', date: '2024-05-20' },
    { id: 2, name: 'Trip to New York', destination: 'New York, USA', date: '2024-06-15' },
    { id: 3, name: 'Trip to Tokyo', destination: 'Tokyo, Japan', date: '2024-07-10' },
  ]);

  // Function to log in user
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out user
  const logout = () => {
    setUser(null);
  };

  // Function to update trips
  const updateTrips = (tripData) => {
    setTrips(tripData);
  };

  return (
    <AppContext.Provider value={{ user, login, logout, trips, updateTrips }}>
      {children}
    </AppContext.Provider>
  );
};
