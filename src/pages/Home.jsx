import React from 'react';
import LandingAnimation from '../jsx/LandingAnimation';
import AboutMe from '../jsx/AboutMe';
import MyWork from './MyWork';

function Home() {
  return (
    <main>
      <LandingAnimation />
      <AboutMe />
      <MyWork/>
    </main>
  );
}

export default Home;
