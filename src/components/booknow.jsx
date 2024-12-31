import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow = () => {
  const [checkin, setCheckin] = useState('');
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (!checkin) {
      toast.error('Please select a check-in date.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    navigate('/enquiry', { state: { checkin } });
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white mb-36">
      <h2 class="text-3xl lg:text-5xl font-bold mb-4 p-2 px-16 text-center sm:p-6">
        Reserve Your <span class="text-[#49602f]">Spot Today</span>
      </h2>

      <ToastContainer />
      <div
        className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-4"
        style={{ backgroundColor: '#49602f' }}
      >
        <div className="w-full md:w-auto">
          <label className="block text-white text-sm font-medium mb-1">Check-in Date</label>
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            min={getMinDate()} // Disable past dates
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-full md:w-auto text-center">
          <label className="block text-[#49602f] text-sm font-medium mb-1">Designed by Raksha</label>
          <button
            onClick={handleBookNow}
            className="w-full px-6 py-2 text-black bg-white rounded-md hover:bg-[#f8af4b] transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
