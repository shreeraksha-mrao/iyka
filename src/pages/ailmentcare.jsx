import React from 'react';

const AilmentCare = () => {
  const ailments = {
    'Metabolic Conditions': [
      'Diabetes Mellitus',
      'Hyperthyroidism',
      'Hypothyroidism',
      'Obesity',
      'PCOD',
      'Hyperuricemia'
    ],
    'Cardiovascular Health': [
      'Hypertension',
      'Hypotension',
      'Hypercholestrolemia',
      'Stroke Rehab',
      'Bypass Rehab'
    ],
    'Digestive Wellness': [
      'Irritable Bowel Syndrome',
      'Indigestion',
      'Constipation',
      'Gastritis',
      'Non-Alcoholic Fatty Liver',
      'Fibroids'
    ],
    'Other Conditions': [
      'Anaemia',
      'Dysmenorrhoea',
      'Acne Vulgaris'
    ]
  };

  return (
    <section 
      id="ailment-care" 
      className="flex items-center py-16 px-4 bg-stone-50 bg-cover bg-center bg-repeat-y lg:overflow-hidden sm:h-screen poppins-regular " 
      style={{ backgroundImage: 'url(/images/wall.jpg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-6xl font-serif mb-4 mt-14 text-[#49602f]">Ailment Care</h2>
          <div className="w-24 h-1 bg-[#49602f]/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(ailments).map(([category, conditions]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-[#49602f] pb-2 border-b border-[#49602f]/20">
                {category}
              </h3>
              <ul className="space-y-2">
                {conditions.map((condition) => (
                  <li 
                    key={condition}
                    className="text-gray-700 hover:text-[#49602f] transition-colors duration-300 cursor-pointer"
                  >
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AilmentCare;
