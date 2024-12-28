import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#49602f] text-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 poppins-regular">
        {/* Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refund & Cancellation Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Work With Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-gray-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fab fa-linkedin"></i></a>
          </div>
          <p>Contact Us: <a href="tel:7625043800" className="hover:underline">7625043800 / 802</a></p>
          <p>Enquiry: <a href="tel:8047645555" className="hover:underline">8047645555</a></p>
          <p>Mail: <a href="mailto:info@iyka-aram.com" className="hover:underline">info@iyka-aram.com</a></p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
          <p>
            Iyka-Aram, Integrative Wellness Center,<br />
            XYZ Road, Near ABC Landmark,<br />
            Cityname, State - 560001
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115150.53539078412!2d91.81003496049944!3d25.589818298708614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e8f34bd207f%3A0x62482df7108f882b!2sShillong%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1735276494047!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8">
        <p>&copy; {new Date().getFullYear()} Iyka-Aram</p>
      </div>
    </footer>
  );
};

export default Footer;
