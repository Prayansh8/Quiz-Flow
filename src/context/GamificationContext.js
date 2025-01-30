import React, { createContext, useState, useEffect } from 'react';

export const GamificationContext = createContext();

const GamificationProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);

  const addPoints = (value) => {
    setPoints((prevPoints) => {
      const newPoints = prevPoints + value;

      // Check and add badges based on newPoints
      if (prevPoints < 10 && newPoints >= 10) {
        setBadges((prevBadges) => [...prevBadges, 'First 10 Points']);
      }
      if (
        prevPoints < 20 &&
        newPoints >= 20 &&
        !badges.includes('20 Points Champion')
      ) {
        setBadges((prevBadges) => [...prevBadges, '20 Points Champion']);
      }

      return newPoints;
    });
  };

  const deductPoints = (value) => {
    setPoints((prevPoints) => prevPoints - value);
  };

  // Persist points and badges to localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('points');
    const savedBadges = localStorage.getItem('badges');

    if (savedPoints) setPoints(JSON.parse(savedPoints));
    if (savedBadges) setBadges(JSON.parse(savedBadges));
  }, []);

  useEffect(() => {
    localStorage.setItem('points', JSON.stringify(points));
    localStorage.setItem('badges', JSON.stringify(badges));
  }, [points, badges]);

  return (
    <GamificationContext.Provider value={{ points, addPoints, deductPoints, badges }}>
      {children}
    </GamificationContext.Provider>
  );
};

export default GamificationProvider;