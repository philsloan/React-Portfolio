import React from 'react';
import './styles.css'; // Import your CSS styles
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Resume from './Resume';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <Portfolio />
        <ContactMe />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
