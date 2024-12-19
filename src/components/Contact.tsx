import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" className="bg-slate-900/50 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-slate-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <Card className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-sky-400" />
              <a href="mailto:saicharangofficial@gmail.com" 
                 className="text-slate-300 hover:text-sky-400 transition">
                saicharangofficial@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-sky-400" />
              <a href="tel:+919398542858" 
                 className="text-slate-300 hover:text-sky-400 transition">
                +91 939 854 2858
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-sky-400" />
              <span className="text-slate-300">Hyderabad, India</span>
            </div>
          </Card>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}