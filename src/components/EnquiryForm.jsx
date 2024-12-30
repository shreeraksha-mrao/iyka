import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

const EnquiryForm = () => {
  const location = useLocation();
  const { checkin, checkout } = location.state || {};
  const form = useRef();
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs.sendForm(
      'service_10oro8e',  // Replace with your EmailJS service ID
      'template_5v2fcen',  // Replace with your EmailJS template ID
      form.current,
      'pIwbEgpQXULwVV36l' // Replace with your EmailJS user ID
    )
    .then((response) => {
      alert('Your enquiry has been submitted successfully!');
      // Reset form data after successful submission
      setData({ name: '', email: '', contact: '', address: '', message: '' });
      form.current.reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('An error occurred while submitting the form. Please try again.');
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Contact</label>
          <input
            type="text"
            name="contact"
            value={data.contact}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={data.address}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Check-in Date</label>
          <input
            type="date"
            name="checkin"
            value={checkin}
            
            className="w-full px-3 py-2 border rounded-md bg-gray-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Check-out Date</label>
          <input
            type="date"
            name="checkout"
            value={checkout}
            
            className="w-full px-3 py-2 border rounded-md bg-gray-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
