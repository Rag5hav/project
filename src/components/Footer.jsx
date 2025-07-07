import React from 'react';
import { PenTool, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <PenTool className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">BlogHub</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using MERN Stack</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 BlogHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;