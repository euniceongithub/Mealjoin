import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>MealJoin</h1>
      <button style={styles.button}>Sign In</button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  logo: {
    margin: 0,
    fontSize: '1.25rem',
    color: '#333'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  // Media query for small screens (mobile)
  '@media (max-width: 600px)': {
    header: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0.5rem 1rem'
    },
    logo: {
      fontSize: '1.5rem'
    },
    button: {
      fontSize: '0.875rem',
      marginTop: '0.5rem'
    }
  }
};

export default Header;
