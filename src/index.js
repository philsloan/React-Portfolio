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
    <main>
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Resume />
      <Footer />
    </main>
  );
}

export default App;
