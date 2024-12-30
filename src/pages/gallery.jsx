import React, { useState } from 'react';
import { X, Loader } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(new Array(images.length).fill(true));

  const handleImageLoad = (index) => {
    setLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Gallery Header */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl sm:text-5xl font-serif text-center mb-2 text-[#49602f]">
          Gallery
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-[#49602f]/20 mx-auto mb-8"></div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md aspect-[4/3] bg-gray-100"
              onClick={() => setSelectedImage(src)}
            >
              {loading[index] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader className="w-8 h-8 text-gray-400 animate-spin" />
                </div>
              )}
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                  loading[index] ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad(index)}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Selected gallery image"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;