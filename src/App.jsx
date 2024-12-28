import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import EnquiryForm from './components/EnquiryForm';
import Navbar from './components/navbar';
import HealingPillars from './pages/healingpillars';
import AilmentCare from './pages/ailmentcare';
import './App.css'
import TherapeuticAmenities from './pages/ta';
import Footer from './components/footer';
import Gallery from './pages/gallery2';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/healing-pillars" element={<HealingPillars />} />
        <Route path="/ailment-care" element={<AilmentCare />}/>
        <Route path="/therapeutic-amenities" element={<TherapeuticAmenities />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
