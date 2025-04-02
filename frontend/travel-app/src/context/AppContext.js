import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // State for user authentication
  const [user, setUser] = useState(null);

  // State for trip data
  const [trips, setTrips] = useState([]);

  // Function to log in user
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out user
  const logout = () => {
    setUser(null);
  };

  // Function to set trips
  const updateTrips = (tripData) => {
    setTrips(tripData);
  };

  return (
    <AppContext.Provider value={{ user, login, logout, trips, updateTrips }}>
      {children}
    </AppContext.Provider>
  );
};
