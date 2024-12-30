import React from "react";

const services = [
  {
    title: "Online Consultation",
    description:
      "Connect with expert therapists and wellness coaches through online consultations. Get personalized advice and solutions tailored to your unique needs from the comfort of your home.",
    image: "/images/online-consultation.jpg", // Replace with your actual image path
  },
  {
    title: "Online Yoga Classes",
    description:
      "Join live, interactive yoga classes led by certified instructors. Improve flexibility, balance, and mindfulness with sessions designed for all skill levels, all from the convenience of your home.",
    image: "/images/online-yoga.jpg", // Replace with your actual image path
  },
  {
    title: "Offline Yoga Classes",
    description:
      "Experience the benefits of in-person yoga practice. Our offline yoga classes provide a community atmosphere, hands-on guidance, and a serene environment for holistic growth.",
    image: "/images/offline-yoga.jpg", // Replace with your actual image path
  },
];

const Service = () => {
  return (
    <div className="max-w-6xl text-center mt-4 mx-auto px-4 md:px-0 py-8 poppins-regular">
      <h2 className="text-6xl font-serif mb-4 mt-14 text-[#49602f]">Our Services</h2>
      <div className="w-24 h-1 bg-[#49602f]/20 mx-auto mb-10"></div>
      {services.map((service, index) => (
        <div
          key={service.title}
          className={`flex gap-6 flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center mb-16`}
        >
          {/* Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2 md:pl-8 md:pr-8 text-justify">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;