import React, { useEffect, useState } from "react";

const sections = [
  {
    id: "acupuncture",
    title: "Acupuncture for Pain and Healing",
    description:
      "Acupuncture, a fundamental practice of Traditional Chinese Medicine (TCM), stimulates the release of endorphins and neurotransmitters to reduce pain and promote healing. This approach not only targets chronic pain but also addresses neurological conditions, mental health challenges, and other health concerns by enhancing circulation, balancing the autonomic nervous system, and fostering the body's natural healing processes. Whether it's treating chronic pain, neurological disorders, or improving overall wellness, acupuncture serves as an effective, drug-free solution to restore balance and vitality.",
    background: "bg-[url('/images/acp1.jpg')]",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy for Musculoskeletal Health",
    description:
      "Manual therapy is an essential component of physiotherapy, utilizing hands-on techniques like soft tissue mobilization, joint mobilization, and myofascial release. These methods help relieve pain, improve mobility, and correct musculoskeletal dysfunction. Manual therapy addresses various conditions such as musculoskeletal pain, sports injuries, and post-surgery rehabilitation. It also plays a significant role in managing chronic pain and improving overall physical health. By targeting the underlying causes of dysfunction, manual therapy aids in long-term recovery and well-being.",
    background: "bg-[url('/images/mt1.jpg')]",
  },
];

const Aiti = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:gap-14 md:flex-row items-center max-w-6xl mx-auto mt-12 sm:mt-24 px-2 sm:px-4 md:px-0 mb-8 sm:mb-10">
        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <img
            src="/images/a.png"
            alt="AITI Therapy"
            className="shadow-md w-full object-cover"
          />
        </div>

        <div className="md:w-2/3">
          <p className="text-sm px-4 sm:text-lg text-gray-700 leading-relaxed poppins-regular text-justify">
            <strong>AITI</strong> combines the ancient wisdom of Acupuncture with the modern
            techniques of Manual Therapy to{" "}
            <strong>
              <span className="text-[#49602f] tet">
                address a wide range of health conditions, from chronic pain and neurological
                disorders to musculoskeletal health and mental well-being.
              </span>
            </strong>{" "}
            &nbsp;Our approach is rooted in evidence-based practices and aims to treat the root
            cause of issues rather than just alleviating symptoms. By combining acupuncture, manual
            therapy, and the holistic principles of Traditional Chinese Medicine (TCM), we focus on
            restoring balance, promoting healing, and improving quality of life naturally and
            effectively.
          </p>
        </div>
      </div>

      <div className="relative h-screen w-full poppins-regular mb-10">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${sections[currentSection].background} bg-cover bg-center`}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <div className="grid grid-cols-1 gap-8 px-6 w-11/12 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`p-8 border transition-transform duration-300 flex flex-col justify-center items-center shadow-lg max-w-4xl mx-auto w-full ${
                  index === currentSection ? "bg-white transform scale-105" : "bg-gray-100 opacity-75"
                }`}
              >
                <h2
                  className={`text-xl font-semibold mb-4 ${
                    index !== currentSection ? "text-gray-700" : "text-black"
                  }`}
                >
                  {section.title}
                </h2>
                {index === currentSection && (
                  <p className="text-sm text-center text-gray-800">{section.description}</p>
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
    </div>
  );
};

export default Aiti;