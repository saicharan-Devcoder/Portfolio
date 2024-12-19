import React from 'react';

const programs = [
  {
    title: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80',
    price: '$49',
    duration: '60 min',
    description: 'Build muscle and increase your strength with our comprehensive program.'
  },
  {
    title: 'HIIT Cardio',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
    price: '$39',
    duration: '45 min',
    description: 'Intense interval training to boost your metabolism and burn fat.'
  },
  {
    title: 'Yoga Flow',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    price: '$35',
    duration: '50 min',
    description: 'Improve flexibility and find inner peace with guided yoga sessions.'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our variety of specialized fitness programs designed to help you achieve your goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <span className="text-blue-600 font-bold">{program.price}/mo</span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{program.duration} sessions</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}