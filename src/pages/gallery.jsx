import React from 'react';

const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/aroma1.jpg',
  'images/ac1.jpg',
  'images/aroma1.jpg',
  'images/mt2.jpg',
  'images/mt1.jpg',
  'images/vr1.jpg',
  'images/wall.jpg',
  'images/two.jpg',
  'images/yoga.jpg',
  'images/yoga2.jpg',
  'images/ins1.jpg',
  'images/ins2.jpg',
  'images/acp2.jpg',
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
