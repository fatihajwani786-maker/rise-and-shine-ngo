import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Programs from '../components/Programs';
import SuccessStories from '../components/SuccessStories'; // <-- Make sure this is imported
import CTA from '../components/CTA'; //

// We will import other components here as we build them

function HomePage() {
  return (
    <div className="home">
      <Hero />
      <ImpactStats /> 
      <Programs /> 
      <SuccessStories /> {/* <-- And make sure it's used here */}
      <CTA />
    </div>
  );
}

export default HomePage;