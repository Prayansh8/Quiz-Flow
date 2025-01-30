import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      }
    } else {
      // Default to light mode
      document.body.classList.add('light');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <Button variant="outline-secondary" onClick={toggleDarkMode}>
      {darkMode ? (
        // Sun icon for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-sun-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 0a.5.5 0 0 1 .5.5V2a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 7 0zM7 14a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-1 0v-1.5A.5.5 0 0 1 7 14zM14.354 2.646a.5.5 0 1 1 .708.708L13.707 5l1.355 1.354a.5.5 0 0 1-.707.708L13 5.707l-1.354 1.355a.5.5 0 1 1-.708-.707L12.293 5l-1.355-1.354a.5.5 0 0 1 .708-.708L13 4.293l1.354-1.355zM2.646 2.646a.5.5 0 0 1 .708.708L2.707 5l1.355 1.354a.5.5 0 1 1-.707.708L2 5.707l-1.354 1.355a.5.5 0 0 1-.708-.707L1.293 5l-1.355-1.354a.5.5 0 1 1 .708-.708L2 4.293l1.354-1.355zM8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-moon-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0z"/>
        </svg>
      )}
    </Button>
  );
};

export default ThemeToggle;