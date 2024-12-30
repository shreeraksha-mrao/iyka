import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseLeave = (e) => {
    const dropdownElement = dropdownRef.current;
    if (!dropdownElement) return;

    const dropdownRect = dropdownElement.getBoundingClientRect();
    
    if (
      e.clientY >= dropdownRect.top - 10 &&
      e.clientY <= dropdownRect.bottom &&
      e.clientX >= dropdownRect.left &&
      e.clientX <= dropdownRect.right
    ) {
      return;
    }
    
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white/70 fixed top-0 w-full z-50 backdrop-blur-md shadow-md">
      <div className="mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 text-2xl md:text-3xl"
            style={{
              fontFamily: 'Playfair Display',
              fontOpticalSizing: 'auto',
              fontWeight: '200',
              fontStyle: 'normal',
            }}
          >
            <span>IYKA-ARAM</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-800 poppins-regular items-center">
            <li>
              <Link to="/" className="hover:text-[#f8af4b] transition duration-300">
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hover:text-[#f8af4b] transition duration-300 cursor-pointer">
                Healing Pillars
              </div>
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
                to="/therapeutic-amenities"
                className="hover:text-[#f8af4b] transition duration-300"
              >
                Therapeutic Amenities
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-[#f8af4b] transition duration-300"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#f8af4b] transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#f8af4b] transition duration-300"
              >
                Services
              </Link>
            </li>
            
            <li>
              <Link
                to="/enquiry"
                className="bg-[#49602f] text-white px-4 py-2 rounded-md shadow hover:bg-[#e09a43] transition duration-300"
              >
                Book Now
              </Link>
            </li>

            
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            mobileMenuOpen ? 'block' : 'hidden'
          } md:hidden mt-4 pb-4`}
        >
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-[#f8af4b] transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left py-2 flex justify-between items-center hover:text-[#f8af4b] transition duration-300"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Healing Pillars
                <span>{mobileDropdownOpen ? '-' : '+'}</span>
              </button>
              {mobileDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/healing-pillars#yonarrympei"
                      className="block py-2 hover:text-[#f8af4b] transition duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Yonarrympei
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/healing-pillars#kynoidem"
                      className="block py-2 hover:text-[#f8af4b] transition duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Kynoidem
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/healing-pillars#aiti"
                      className="block py-2 hover:text-[#f8af4b] transition duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Aiti
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/ailment-care"
                className="block py-2 hover:text-[#f8af4b] transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ailment Care
              </Link>
            </li>
            <li>
              <Link
                to="/therapeutic-amenities"
                className="block py-2 hover:text-[#f8af4b] transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Therapeutic Amenities
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 hover:text-[#f8af4b] transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 hover:text-[#f8af4b] transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to="/enquiry"
                className="block w-full bg-[#49602f] text-white px-4 py-2 rounded-md shadow hover:bg-[#e09a43] transition duration-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;