import React from 'react';
import { Users, Calendar, Trophy, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Work with certified professionals who are passionate about your success'
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Choose from multiple class times that fit your busy lifestyle'
  },
  {
    icon: Trophy,
    title: 'Goal Tracking',
    description: 'Monitor your progress and celebrate achievements along the way'
  },
  {
    icon: Heart,
    title: 'Supportive Community',
    description: 'Join a motivated group of individuals on the same journey'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to reach your fitness goals and maintain a healthy lifestyle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}