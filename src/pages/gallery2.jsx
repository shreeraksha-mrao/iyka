import React from 'react';

const Gallery = () => {
  return (
    <div className="pt-24 text-center poppins-regular">
      <h2 className="md:text-6xl text-4xl font-serif mb-4 mt-14 text-[#49602f]">Moments in Motion</h2>
      <div className="w-24 h-1 bg-[#49602f]/20 mx-auto"></div>
      <section className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-8">
        {Array.from({ length: 24 }, (_, index) => (
          <div key={index} className="image relative overflow-hidden">
            <img
              src={`images/gallery/img${index + 1}.jpg`}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
