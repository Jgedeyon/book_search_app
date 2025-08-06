// src/components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading books...</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  spinner: {
    margin: '0 auto',
    width: '50px',
    height: '50px',
    border: '6px solid #eee',
    borderTop: '6px solid #3f51b5',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    color: '#555',
  },
};

// Inject spinner animation globally
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default Loader;