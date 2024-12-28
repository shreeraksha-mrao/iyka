// src/pages/healingpillars.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Aiti from '../components/aiti';
import Kynoidem from '../components/Kynoidem';
import Yonarrympei from '../components/Yonarrympei';

const HealingPillars = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Update the active section based on the URL hash
  useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    setActiveSection(sectionId);
  }, [location]);

  return (
    <div className="healing-pillars-container">
      

      {/* Display the active section */}
      {activeSection === 'aiti' && <Aiti />}
      {activeSection === 'kynoidem' && <Kynoidem />}
      {activeSection === 'yonarrympei' && <Yonarrympei />}

      {/* If no section is selected */}
      {!activeSection && (
        <div className="text-center text-lg">
          Please select a healing pillar from the dropdown in the navbar.
        </div>
      )}
    </div>
  );
};

export default HealingPillars;
