import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnquiryForm = () => {
  const location = useLocation();
  const { checkin } = location.state || {};
  const form = useRef();
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    message: '',
    preferences: {
      onlineConsultation: false,
      onlineYoga: false,
      offlineYoga: false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the contact field contains a phone number
    if (data.contact) {
      toast.info('Submitting your phone enquiry, please wait...', {
        position: 'top-center',
        autoClose: false,
        toastId: 'sendingPhoneToast', // Unique ID for phone toast
        className: 'text-xs', // Smaller text for phone-related toast
      });
    } else {
      toast.info('Sending your enquiry, please wait...', {
        position: 'top-center',
        autoClose: false,
        toastId: 'sendingToast', // Unique ID to prevent duplicate toasts
      });
    }

    emailjs
      .sendForm(
        'service_mqflhdj', // Replace with your EmailJS service ID
        'template_umoqdha', // Replace with your EmailJS template ID
        form.current,
        '5FaW_1CWe9hGNIRti' // Replace with your EmailJS user ID
      )
      .then(() => {
        toast.dismiss('sendingToast');
        toast.dismiss('sendingPhoneToast');
        toast.success('Your enquiry has been submitted successfully!');
        setData({
          name: '',
          email: '',
          contact: '',
          address: '',
          message: '',
          preferences: {
            onlineConsultation: false,
            onlineYoga: false,
            offlineYoga: false,
          },
        });
        form.current.reset();
      })
      .catch(() => {
        toast.dismiss('sendingToast');
        toast.dismiss('sendingPhoneToast');
        toast.error('An error occurred while submitting the form. Please try again.');
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setData((prevData) => ({
        ...prevData,
        preferences: {
          ...prevData.preferences,
          [name]: checked,
        },
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex pt-24 flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <ToastContainer />
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Enquiry Form</h2>

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
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Preferences</h3>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="onlineConsultation"
              checked={data.preferences.onlineConsultation}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Online Consultation</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="onlineYoga"
              checked={data.preferences.onlineYoga}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Online Yoga</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="offlineYoga"
              checked={data.preferences.offlineYoga}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Offline Yoga</label>
          </div>
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
