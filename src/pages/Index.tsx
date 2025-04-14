
import React, { useState } from 'react';
import ImageGeneratorTitle from '@/components/ImageGeneratorTitle';
import PromptInput from '@/components/PromptInput';
import ImageGrid from '@/components/ImageGrid';

const Index = () => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    // This would connect to an API in a real application
    console.log('Generating images for prompt:', prompt);
    // For now, we'll just log the prompt as requested (no backend implementation)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-screen-md mx-auto bg-white shadow-md rounded-xl p-6 md:p-8 space-y-8">
        <ImageGeneratorTitle />
        
        <PromptInput 
          prompt={prompt} 
          setPrompt={setPrompt} 
          onGenerate={handleGenerate} 
        />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Images</h2>
          <ImageGrid />
        </div>
      </div>
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>© 2025 AI Image Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
