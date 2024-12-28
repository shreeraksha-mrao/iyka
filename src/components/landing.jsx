import React from 'react';
import Navbar from './navbar';
import BookNow from './booknow';
import About from './about';
import Info from './Info';
import Review from './reviews';
import Footer from './footer';

const Landing = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <header className="relative top-0 left-0 h-screen w-full bg-white flex justify-center items-center ">
        <img
          src="images/logo2.png"
          alt="Centered Logo"
          className="max-w-full max-h-full object-contain"
        />
      </header>
      <BookNow />
      <About />
      <Info />
      <Review />
    </div>
  );
};

export default Landing;
