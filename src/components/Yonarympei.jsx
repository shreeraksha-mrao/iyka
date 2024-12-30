import React, { useEffect, useState } from "react";

const sections = [
  {
    id: "heal-renew",
    title: "Holistic Healing Through Yoga Therapy",
    description: "Experience the power of yoga backed by science! Our evidence-based yoga modules, curated by AYUSH-certified Yoga and Naturopathy Physicians, are tailored for managing diseases and specific health conditions, helping you heal naturally and effectively.",
    background: "bg-[url('/images/yoga.jpg')]",
  },
  {
    id: "strengthen-sustain",
    title: "The Gut Balance Blueprint",
    description:
      "Trust your gut with IYKA! A healthy gut thrives when good bacteria outnumber the bad. At IYKA, we introduce, educate, and promote gut health for all age groups, empowering you to build a balanced and thriving gut habitat.",
    background: "bg-[url('/images/two.jpg')]",
  },
  {
    id: "rejuvenate-revive",
    title: "Fueling Health with Nutrition",
    description: "Discover the transformative power of food! Our evidence-based approach to Nutrition and Dietetics unlocks the secrets to a healthier, balanced life, tailored to your unique needs for optimal well-being.",
    background: "bg-[url('/images/heal.jpg')]",
  },
];

const Yonarympei = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:gap-14 md:flex-row items-center max-w-6xl mx-auto mt-12 sm:mt-24 px-2 sm:px-4 md:px-0 mb-8 sm:mb-10">
        {/* Image Section */}
        <div className="md:w-1/3 mb-8 sm:mb-14 md:mb-0 md:mr-8">
          <img
            src="/images/y.png"
            alt="Yonarympei Concept"
            className="shadow-md w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3">
          <p className="text-sm sm:text-lg text-gray-700 leading-relaxed poppins-regular text-justify">
            <strong>Yonarympei</strong> is a transformative healing concept that integrates Yoga
            Therapy, Gut Health, and Nutrition to{" "}
            <strong>
              <span className="text-[#49602f]">
                restore and sustain physical, mental, emotional, and spiritual well-being.
              </span>
            </strong>{" "}
            Rooted in both ancient practices and modern science, it emphasizes the
            interconnectedness of mind, body, and spirit. Through personalized yoga, nutrition, and
            gut health interventions, Yonarympei offers a holistic approach to wellness, promoting
            balance and vitality. Whether managing specific health conditions or enhancing overall
            vitality, it empowers individuals to achieve optimal well-being naturally and
            sustainably.
          </p>
        </div>
      </div>

      <div className="relative h-screen w-full poppins-regular mb-8 sm:mb-10">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${sections[currentSection].background} bg-cover bg-center`}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          {/* Sections Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 w-11/12 max-w-6xl justify-center">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`p-4 sm:p-6 border transition-transform duration-300 flex flex-col justify-center items-center shadow-lg ${
                  index === currentSection
                    ? "bg-white transform scale-105"
                    : "bg-gray-100 opacity-75"
                }`}
              >
                <h2
                  className={`text-sm sm:text-xl font-semibold mb-2 sm:mb-4 ${
                    index !== currentSection ? "text-gray-700" : "text-black"
                  }`}
                >
                  {section.title}
                </h2>
                {index === currentSection && (
                  <p className="text-xs md:text-sm text-center text-gray-800">{section.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-6 flex justify-center gap-2 sm:gap-3 w-full">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
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

export default Yonarympei;
