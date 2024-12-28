import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Jyoti G",
    source: "Tripadvisor",
    text: "Iyka-Aram is a serene haven! Nestled amidst nature, it offers the perfect destination for rejuvenation. The staff is incredibly friendly and supportive, the therapies are world-class, and the environment is tranquil. Can't wait to return!",
  },
  {
    id: 2,
    name: "Rohan K",
    source: "Google Reviews",
    text: "I was amazed by the personalized care at Iyka-Aram. The team here goes above and beyond to ensure your wellness journey is enriching. The yoga sessions and gut health therapies have truly transformed my life.",
  },
  {
    id: 3,
    name: "Ananya S",
    source: "Facebook",
    text: "A sanctuary for the soul! Iyka-Aram focuses on every aspect of wellness. The nutrition guidance and functional medicine approaches are unparalleled. Highly recommend to anyone seeking holistic healing.",
  },
  {
    id: 4,
    name: "Kartik V",
    source: "Yelp",
    text: "From the moment I arrived, I felt at home. Iyka-Aram's focus on drug-free healthcare is remarkable. Their approach to mental, physical, and spiritual health is both modern and rooted in tradition.",
  },
  {
    id: 5,
    name: "Meera N",
    source: "Trustpilot",
    text: "Iyka-Aram has been a life-changing experience for me. The therapies and the warm hospitality have made a lasting impact. The team is knowledgeable and passionate about what they do.",
  },
];

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div style = {{backgroundImage:"url('images/wall.jpg')"}}
    
    className="text-white py-16 px-6 poppins-regular">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-700">
          Hear from Our Guests
        </h2>
        <div className="relative bg-white bg-opacity-80 text-gray-800 rounded-lg shadow-lg p-28">
          <p className="text-lg mb-4 italic">"{reviews[currentReview].text}"</p>
          <h4 className="text-lg font-bold">
            - {reviews[currentReview].name}
          </h4>
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <button
              className="p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400"
              onClick={prevReview}
            >
              &#8592;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button
              className="p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400"
              onClick={nextReview}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
