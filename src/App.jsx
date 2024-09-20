import React from 'react';
import Header from './jsx/Header';
import Footer from './jsx/Footer';
import LandingAnimation from './jsx/LandingAnimation';
import AboutMe from './jsx/AboutMe';
import Life from './jsx/Life';
import './App.css';


function App() {
  return (
      <div id="root">
          <Header/>
          <main>
                <LandingAnimation/>
                <AboutMe/>
                <Life/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
