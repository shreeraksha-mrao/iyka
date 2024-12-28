import React from "react";

const amenities = [
  {
    title: "Yoga Therapy",
    description:
      "Yoga Therapy integrates movement, breathwork, and mindfulness to improve physical and mental health. It focuses on reducing stress, enhancing flexibility, and promoting a sense of inner calm. Ideal for managing chronic pain, improving posture, and boosting overall well-being.",
    image: "/images/yoga2.jpg", // Replace with your actual image path
  },
  {
    title: "Gut Balance Plan",
    description:
      "A Gut Balance Plan addresses digestive health by promoting a diet rich in probiotics, fiber, and essential nutrients. This approach helps reduce inflammation, boost immunity, and improve overall digestion, creating a healthier microbiome.",
    image: "/images/gut2.jpg", // Replace with your actual image path
  },
  {
    title: "Health with Nutrition",
    description:
      "Optimal health starts with proper nutrition. This program provides personalized dietary plans tailored to your unique needs. It focuses on nutrient-dense foods to enhance energy levels, support immunity, and prevent chronic diseases.",
    image: "/images/ayurveda2.jpg", // Replace with your actual image path
  },
  {
    title: "Aromatherapy",
    description:
      "Aromatherapy utilizes essential oils to promote relaxation and mental clarity. It balances hormones, eases sleep disorders, and creates a calming atmosphere to support emotional well-being and regenerative sleep.",
    image: "/images/aroma2.jpg", // Replace with your actual image path
  },
  {
    title: "Acupressure",
    description:
      "Acupressure applies pressure on specific body points to enhance circulation and relieve stress. This ancient technique improves sleep quality, alleviates pain, and supports the body’s natural healing processes.",
    image: "/images/ac2.jpg", // Replace with your actual image path
  },
  {
    title: "Cognitive Behavioral Therapy for Insomnia",
    description:
      "CBT-I is a proven method to modify negative sleep behaviors and thoughts. It helps restore natural sleep cycles by addressing the root causes of insomnia and improving sleep habits.",
    image: "/images/ins2.jpg", // Replace with your actual image path
  },
  {
    title: "Virtual Reality Headsets",
    description:
      "Virtual reality headsets create immersive environments designed for relaxation and stress reduction. By guiding the mind into a restful state, they enhance sleep quality and promote mental calmness.",
    image: "/images/vr2.jpg", // Replace with your actual image path
  },
  {
    title: "Acupuncture for Pain and Healing",
    description:
      "Acupuncture stimulates the release of endorphins and neurotransmitters to reduce pain and promote healing. It’s effective for chronic pain, neurological disorders, and overall wellness.",
    image: "/images/acp2.jpg", // Replace with your actual image path
  },
  {
    title: "Manual Therapy for Musculoskeletal Health",
    description:
      "Manual therapy uses hands-on techniques to relieve pain, improve mobility, and correct dysfunction. It’s essential for managing musculoskeletal pain, sports injuries, and post-surgery recovery.",
    image: "/images/mt2.jpg", // Replace with your actual image path
  },
];

const TherapeuticAmenities = () => {
  return (
    <div className="max-w-6xl text-center mt-4 mx-auto px-4 md:px-0 py-8 poppins-regular">
      <h2 className="text-6xl font-serif mb-4 mt-14 text-[#49602f]">Therapeutic Amneties</h2>
      <div className="w-24 h-1 bg-[#49602f]/20 mx-auto mb-10"></div>
      {amenities.map((amenity, index) => (
        <div
          key={amenity.title}
          className={`flex gap-6 flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-16`}
        >
          {/* Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={amenity.image}
              alt={amenity.title}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2 md:pl-8 md:pr-8 text-justify">
            <h2 className="text-2xl font-semibold mb-4">{amenity.title}</h2>
            <p className="text-gray-700 leading-relaxed">{amenity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TherapeuticAmenities;
