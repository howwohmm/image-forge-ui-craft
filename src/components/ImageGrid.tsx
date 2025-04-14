
import React from 'react';
import { ImageIcon } from 'lucide-react';

const ImageGrid = () => {
  // Array of 6 placeholder items
  const placeholders = Array(6).fill(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {placeholders.map((_, index) => (
        <div 
          key={index} 
          className="h-48 md:h-56 bg-white border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 transition-all hover:border-blue-400"
        >
          <ImageIcon className="w-10 h-10 text-gray-300 mb-2" />
          <p className="text-sm text-center text-gray-500">
            Generated image will appear here
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
