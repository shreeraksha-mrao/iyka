import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#49602f] text-gray-100 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 sm:px-8 poppins-regular">
        {/* Information Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide">Information</h3>
          <ul className="space-y-3">
            <li><Link to="/privacy" className="hover:underline hover:text-gray-300 transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link to="/refundPolicy" className="hover:underline hover:text-gray-300 transition-colors duration-300">Refund & Cancellation Policy</Link></li>
            <li><Link to="/terms" className="hover:underline hover:text-gray-300 transition-colors duration-300">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:underline hover:text-gray-300 transition-colors duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide">Social Media</h3>
          <div className="flex space-x-5 mb-4">
            <a href="https://www.instagram.com/yona.wellness/" className="text-gray-200 hover:text-gray-300 transition-colors duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            {/* Add other social media icons as needed */}
          </div>
          <p className="text-sm mb-2">Contact Us: <a href="tel:6009696208" className="hover:underline hover:text-gray-300 transition-colors duration-300">6009696208</a></p>
          <p className="text-sm mb-2">Enquiry: <a href="tel:6009696208" className="hover:underline hover:text-gray-300 transition-colors duration-300">6009696208</a></p>
          <p className="text-sm">Mail: <a href="mailto:info@iyka-aram.com" className="hover:underline hover:text-gray-300 transition-colors duration-300">yonawellnessandhealthcare@gmail.com</a></p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide">Address</h3>
          <p className="text-sm">
            Iyka-Aram Wellness Center<br />
            HV89+8Q4, Gate-1 New, Kench's Trace, Laban,<br />
            Bishnupur, Shillong, Meghalaya 793004
          </p>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.1774480323397!2d91.86945310000002!3d25.565762499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507f006ea4c30f%3A0x1755efba31561695!2sIYKA-Aram%20Wellness%20and%20Healthcare!5e0!3m2!1sen!2sin!4v1735454777925!5m2!1sen!2sin"
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

      {/* Footer Bottom Section */}
      <div className="text-center text-sm mt-12 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} Iyka-Aram. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#49602f] text-gray-100 py-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 poppins-regular">
//         {/* Information Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//             <li><a href="#" className="hover:underline">Refund & Cancellation Policy</a></li>
//             <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
//             <li><a href="#" className="hover:underline">Work With Us</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//             <li><a href="#" className="hover:underline">FAQ</a></li>
//           </ul>
//         </div>

//         {/* Social Media Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
//           <div className="flex space-x-4 mb-4">
//             <a href="https://www.instagram.com/yona.wellness/" className="hover:text-gray-500"><i className="fab fa-instagram"></i></a>
//           </div>
//           <p>Contact Us: <a href="tel:7625043800" className="hover:underline">6009696208</a></p>
//           <p>Enquiry: <a href="tel:8047645555" className="hover:underline">6009696208</a></p>
//           <p>Mail: <a href="mailto:info@iyka-aram.com" className="hover:underline text-xs sm:text-base">yonawellnessandhealthcare@gmail.com
// </a></p>
//         </div>

//         {/* Address Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
//           <p>
//             Iyka-Aram Wellness Center<br />
//             HV89+8Q4,Gate-1 New, Kench's Trace, Laban,<br />
//             Bishnupur, Shillong, Meghalaya 793004
//           </p>
//           <div className="mt-4">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.1774480323397!2d91.86945310000002!3d25.565762499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507f006ea4c30f%3A0x1755efba31561695!2sIYKA-Aram%20Wellness%20and%20Healthcare!5e0!3m2!1sen!2sin!4v1735454777925!5m2!1sen!2sin"
//               width="100%"
//               height="150"
//               style={{ border: "0" }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Google Map"
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       <div className="text-center text-sm mt-8">
//         <p>&copy; {new Date().getFullYear()} Iyka-Aram</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;