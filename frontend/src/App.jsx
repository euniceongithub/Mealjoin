import React from 'react';
import './App.css';
import Header from './Header';
// import WelcomeSection from './WelcomeSection';
import Hero from "./Hero";

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header />
      <Hero />
      {/* <WelcomeSection /> */}
    </div>
  );
}

export default App;
