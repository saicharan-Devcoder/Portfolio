import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FitLife</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-blue-600">Programs</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#trainers" className="text-gray-700 hover:text-blue-600">Trainers</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}