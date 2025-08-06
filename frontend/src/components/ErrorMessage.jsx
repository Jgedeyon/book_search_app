// src/components/ErrorMessage.jsx
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div style={styles.wrapper}>
      <p style={styles.label}>🚫 Error</p>
      <p style={styles.text}>{message || 'Something went wrong. Please try again.'}</p>
    </div>
  );
};

const styles = {
  wrapper: {
    border: '1px solid #f44336',
    backgroundColor: '#ffe6e6',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#d32f2f',
    marginTop: '1rem',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1rem',
  },
};

export default ErrorMessage;