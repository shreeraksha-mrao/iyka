import React, { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your Email.js service ID
        "YOUR_TEMPLATE_ID", // Replace with your Email.js template ID
        form.current,
        "YOUR_USER_ID" // Replace with your Email.js user ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="pt-24 poppins-regular" id="Contact">
      <div className="contact text-center max-w-[90%] mx-auto">
        <h2 className="text-4xl sm:text-6xl font-serif mb-4 text-[#49602f]">
          Contact Us
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-[#49602f]/20 mx-auto"></div>
      </div>

      <div className="flex flex-wrap justify-center mt-8 px-4 sm:px-0">
        {/* Contact Info Section */}
        <div className="contactInfo w-full sm:w-[40%] flex flex-col items-center sm:items-start mb-8 sm:mb-0">
          <div className="infoBox flex items-center py-4 w-full max-w-[26rem]">
            <div className="icon flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-full">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text ml-4">
              <h3 className="font-semibold text-base sm:text-lg">Address</h3>
              <p className="text-sm sm:text-base">Shilong, India</p>
            </div>
          </div>

          <div className="infoBox flex items-center py-4 w-full max-w-[26rem]">
            <div className="icon flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-full">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text ml-4">
              <h3 className="font-semibold text-base sm:text-lg">Email</h3>
              <p className="text-xs sm:text-base">
                yonawellnessandhealthcare@gmail.com
              </p>
            </div>
          </div>

          <div className="infoBox flex items-center py-4 w-full max-w-[26rem]">
            <div className="icon flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-full">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text ml-4">
              <h3 className="font-semibold text-base sm:text-lg">Phone</h3>
              <p className="text-sm sm:text-base">+91 6009696208</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contactForm w-full sm:w-[50%] bg-transparent px-6 py-6 sm:px-10 sm:py-10">
          <form ref={form} onSubmit={handleSubmit}>
            <h2 className="text-black text-xl sm:text-2xl mb-4">
              Feedback or Queries
            </h2>
            <div className="inputBox mt-4">
              <input
                type="text"
                name="name"
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Full Name"
                className=" 0 w-full py-2 border-b-2 border-black text-black text-sm sm:text-lg focus:outline-none"
              />
            </div>
            <div className="inputBox mt-4">
              <input
                type="email"
                name="email"
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Email Address"
                className=" 0 w-full py-2 border-b-2 border-black text-black text-sm sm:text-lg focus:outline-none"
              />
            </div>
            <div className="inputBox mt-4">
              <textarea
                name="message"
                required
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder="Message"
                className=" 0 w-full py-2 border-b-2 border-black text-black text-sm sm:text-lg resize-none focus:outline-none"
              />
            </div>
            <div className="inputBox mt-4">
              <input
                type="submit"
                value="Send"
                className="w-full sm:w-1/2 py-2 bg-black text-white border-2 border-white cursor-pointer hover:bg-[#49602f] hover:text-white transition"
              />
            </div>
          </form>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
