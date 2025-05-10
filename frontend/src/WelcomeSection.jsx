import React from 'react';

const WelcomeSection = () => {
  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>Welcome to MealJoin</h1>
      <p style={styles.text}>Invite friends over for a meal — and earn from it.</p>
    </main>
  );
};

const styles = {
  main: {
    paddingTop: '100px',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  text: {
    fontSize: '1rem',
    color: '#555'
  },
  // Media query for small screens (mobile)
  '@media (max-width: 600px)': {
    main: {
      paddingTop: '120px',
      paddingLeft: '1rem',
      paddingRight: '1rem'
    },
    heading: {
      fontSize: '1.5rem'
    },
    text: {
      fontSize: '0.875rem'
    }
  }
};

export default WelcomeSection;
