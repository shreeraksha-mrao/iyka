import React, { useEffect, useState } from "react";

const sections = [
  {
    id: "heal-renew",
    title: "Nurturing Connections for a Fulfilling Life",
    description: "Embrace a lifestyle that harmonizes livelihood with meaningful relationships—fostering a deeper bond with yourself, nature, and the nourishment you consume. Experience the essence of wellness and luxury as you cultivate balance, sustainability, and inner peace.",
    background: "bg-[url('/images/1.jpg')]"
  },
  {
    id: "strengthen-sustain",
    title: "A Sanctuary for Holistic Healing",
    description:
      "Discover a nurturing sanctuary where cutting-edge research and evidence-based approaches converge to support your physical, mental, and emotional well-being, fostering a path to lasting health and harmony.",
    background: "bg-[url('/images/2.jpg')]",
  },
  {
    id: "rejuvenate-revive",
    title: "Embracing Balance and Inner Peace",
    description: "Discover a way of living that fosters balance, clarity, and vitality. By focusing on mindful practices and meaningful connections with yourself, others, and the environment, you can cultivate a life filled with purpose and tranquility. Let this journey inspire lasting peace and well-being in every facet of your life.",
    background: "bg-[url('/images/3.jpg')]",
  },
];

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full poppins-regular mb-10">
      <div
        className={`absolute inset-0 transition-all duration-1000 ${sections[currentSection].background} bg-cover bg-center blur-sm`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Title Section */}
        <div className="text-center mb-14 hidden sm:block">
          <h1 className="text-2xl md:text-3xl font-bold text-white p-10 poppins-regular">
            IYKA-Aram: The Union of Human Body and Spirit in Livelihood and Movement
          </h1>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full sm:w-11/12 max-w-6xl px-4 sm:px-0 justify-center">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`p-6 border rounded-lg transition-transform duration-300 flex flex-col justify-center items-center mx-auto ${
                index === currentSection
                  ? "bg-white shadow-lg transform scale-105"
                  : "bg-gray-100 opacity-75"
              }`}
            >
              <h2
                className={`text-sm sm:text-xl font-semibold text-center mb-2 ${
                  index !== currentSection ? "mt-auto mb-auto" : ""
                }`}
              >
                {section.title}
              </h2>
              {index === currentSection && (
                <p className="text-xs sm:text-sm text-center">{section.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 flex justify-center gap-3 w-full">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === currentSection ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSection(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default About;
