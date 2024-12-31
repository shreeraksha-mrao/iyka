import React, { useEffect, useState } from "react";

const sections = [
  {
    id: "aromatherapy",
    title: "Aromatherapy",
    description:
      "Aromatherapy utilizes essential oils to foster relaxation and mental clarity. It plays a crucial role in balancing hormones, easing sleep disorders, and promoting deep relaxation, which is fundamental to improving regenerative sleep.",
    background: "bg-[url('/images/aroma1.jpg')]",
  },
  {
    id: "acupressure",
    title: "Acupressure",
    description:
      "Acupressure applies pressure on specific points on the body, improving circulation and relieving stress. This method enhances sleep quality and helps balance the body’s energy flow, aiding in natural sleep regulation.",
    background: "bg-[url('/images/ac1.jpg')]",
  },
  {
    id: "cbt-i",
    title: "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
    description:
      "CBT-I is a scientifically proven therapy designed to modify negative sleep behaviors and thoughts. It provides tools to combat insomnia by improving sleep habits and emotional responses to sleep, restoring natural sleep cycles.",
    background: "bg-[url('/images/ins1.jpg')]",
  },
  {
    id: "vr-headsets",
    title: "Virtual Reality Headsets",
    description:
      "Virtual reality headsets create immersive environments that promote relaxation and calm. They enhance sleep quality by using immersive experiences designed to guide the mind into a restful state, contributing to improved sleep cycles.",
    background: "bg-[url('/images/vr1.jpg')]",
  },
];

const Kynoidem = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Flex Container for Image and Description */}
      <div className="flex flex-col gap-6 sm:gap-14 md:flex-row items-center max-w-6xl mx-auto mt-12 sm:mt-24 px-2 sm:px-4 md:px-0 mb-8 sm:mb-10">
        {/* Image Section */}
        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <img
            src="/images/k.png" // Replace with your image path
            alt="Kynoidem Concept"
            className="shadow-md w-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3">
          <p className="text-sm sm:text-lg px-4 text-gray-700 leading-relaxed poppins-regular text-justify">
            <strong>Kynoidem</strong> is an integrative sleep medicine concept focused on improving
            sleep quality and restoring hormonal balance through a combination of modern techniques
            and traditional therapies. Using a holistic approach rooted in circadian rhythms,
            Kynodiem enhances sleep through methods like{" "}
            <strong>
              <span className="text-[#49602f]">Aromatherapy</span>
            </strong>
            ,{" "}
            <strong>
              <span className="text-[#49602f]">Acupressure</span>
            </strong>
            ,{" "}
            <strong>
              <span className="text-[#49602f]">Cognitive Behavioral Therapy for Insomnia</span>
            </strong>
            , and{" "}
            <strong>
              <span className="text-[#49602f]">Virtual Reality headsets</span>
            </strong>
            . These techniques work together to help individuals achieve restorative, regenerative
            sleep, leading to better health, relaxation, and overall well-being.
          </p>
        </div>
      </div>

      {/* Background Image & Sections */}
      <div className="relative lg:h-[75vh] w-full poppins-regular mb-10">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${sections[currentSection].background} bg-cover bg-center`}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight px-4 md:px-10">
            KYNOIDEM: Restoring the Power of Sleep
          </h1>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 gap-4 px-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 w-11/12 max-w-6xl justify-center">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`p-4 md:p-6 border transition-transform duration-300 flex flex-col justify-center items-center shadow-lg ${
                  index === currentSection
                    ? "bg-white transform scale-105"
                    : "bg-gray-100 opacity-75"
                }`}
              >
                <h2
                  className={`text-lg md:text-xl font-semibold mb-3 ${
                    index !== currentSection ? "text-gray-700" : "text-black"
                  }`}
                >
                  {section.title}
                </h2>
                {index === currentSection && (
                  <p className="text-sm md:text-base text-center text-gray-800">
                    {section.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 flex justify-center gap-2 w-full">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${
                index === currentSection ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSection(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kynoidem;
