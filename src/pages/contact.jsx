import React, { useRef, useState } from 'react'

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="bg-green-100 pt-24 poppins-regular" id="Contact">
      <div className="contact text-center max-w-[80%] mx-auto">
      <h2 className="text-6xl font-serif mb-4 text-[#49602f]">Contact Us</h2>
      <div className="w-24 h-1 bg-[#49602f]/20 mx-auto"></div>
      </div>

      <div className="justify-around flex items-center mt-8">
        <div className="contactInfo min-w-[32%] flex flex-col">
          <div className="infoBox flex py-5">
            <div className="icon flex justify-center items-center w-14 h-14 bg-black text-white text-xl rounded-full cursor-pointer">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text ml-4">
              <h3 className="font-semibold">Address</h3>
              <p>Shilong, India</p>
            </div>
          </div>

          <div className="infoBox flex py-5">
            <div className="icon flex justify-center items-center w-14 h-14 bg-black text-white text-xl rounded-full cursor-pointer">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="text ml-4">
              <h3 className="font-semibold">Email</h3>
              <p>iykaaram@gmail.com</p>
            </div>
          </div>

          <div className="infoBox flex py-5">
            <div className="icon flex justify-center items-center w-14 h-14 bg-black text-white text-xl rounded-full cursor-pointer">
              <i className="fas fa-phone"></i>
            </div>
            <div className="text ml-4">
              <h3 className="font-semibold">Phone</h3>
              <p>+91 9851121079</p>
            </div>
          </div>
        </div>

        <div className="contactForm w-[50%] px-10 py-10 bg-transparent ml-24">
          <form action="#" method="POST" ref={form}>
            <h2 className="text-black text-2xl">Feedback or Queries</h2>
            <div className="inputBox mt-4">
              <input
                type="text"
                name="name"
                required="required"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Full Name"
                className="bg-green-100 w-full py-2 border-b-2 border-black text-black text-lg focus:outline-none"
              />
            </div>
            <div className="inputBox mt-4">
              <input
                type="email"
                name="email"
                required="required"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Email Address"
                className="bg-green-100 w-full py-2 border-b-2 border-black text-black text-lg focus:outline-none"
              />
            </div>
            <div className="inputBox mt-4">
              <textarea
                name="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder="Message"
                className="bg-green-100 w-full py-2 border-b-2 border-black text-black text-lg resize-none focus:outline-none"
              />
            </div>
            <div className="inputBox mt-4">
              <input
                type="submit"
                value="Send"
                name="submit"
                className="w-1/2 py-2 bg-black text-white border-2 border-white cursor-pointer hover:bg-[#49602f]"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
