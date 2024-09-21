import React from 'react';
import LandingAnimation from '../jsx/LandingAnimation'; 
import AboutMe from '../jsx/AboutMe'; 
import Life from '../jsx/Life'; 



function Home() {
  return (
    <>
      <main>
        <LandingAnimation />
        <AboutMe />
        <Life />
      </main>
    </>
  );
}

export default Home;

