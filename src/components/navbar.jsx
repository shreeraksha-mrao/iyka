import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseLeave = (e) => {
    // Get the dropdown element's position
    const dropdownElement = dropdownRef.current;
    if (!dropdownElement) return;

    const dropdownRect = dropdownElement.getBoundingClientRect();
    
    // Check if the mouse is moving towards the dropdown
    if (
      e.clientY >= dropdownRect.top - 10 && // Added small buffer
      e.clientY <= dropdownRect.bottom &&
      e.clientX >= dropdownRect.left &&
      e.clientX <= dropdownRect.right
    ) {
      return; // Don't close if moving towards dropdown
    }
    
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white/70 fixed w-full z-50 backdrop-blur-md shadow-md" style={{
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        position: 'fixed',
      }}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div
          className="flex items-center space-x-2 text-3xl"
          style={{
            fontFamily: 'Playfair Display',
            fontOpticalSizing: 'auto',
            fontWeight: '200',
            fontStyle: 'normal',
          }}
        >
          <span>IYKA-ARAM</span>
        </div>
        <ul className="flex space-x-8 text-gray-800 poppins-regular relative">
          <li>
            <Link to="/" className="hover:text-[#f8af4b] transition duration-300">
              Home
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-[#f8af4b] transition duration-300 cursor-pointer">
              Healing Pillars
            </div>
            {/* Dropdown */}
            <div 
              ref={dropdownRef}
              className={`absolute bg-white shadow-md rounded mt-2 w-40 z-50 ${showDropdown ? 'block' : 'hidden'}`}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <ul>
                <li>
                  <Link
                    to="/healing-pillars#yonarrympei"
                    className="block px-4 py-2 hover:bg-[#f8af4b] hover:text-white transition duration-300"
                  >
                    Yonarrympei
                  </Link>
                </li>
                <li>
                  <Link
                    to="/healing-pillars#kynoidem"
                    className="block px-4 py-2 hover:bg-[#f8af4b] hover:text-white transition duration-300"
                  >
                    Kynoidem
                  </Link>
                </li>
                <li>
                  <Link
                    to="/healing-pillars#aiti"
                    className="block px-4 py-2 hover:bg-[#f8af4b] hover:text-white transition duration-300"
                  >
                    Aiti
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              to="/ailment-care"
              className="hover:text-[#f8af4b] transition duration-300"
            >
              Ailment Care
            </Link>
          </li>
          <li>
            <Link
              to="therapeutic-amenities"
              className="hover:text-[#f8af4b] transition duration-300"
            >
              Therapeutic Amenities
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              className="hover:text-[#f8af4b] transition duration-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="hover:text-[#f8af4b] transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          to="/enquiry"
          className="bg-[#49602f] text-white px-4 py-2 rounded-md shadow hover:bg-[#e09a43] transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;