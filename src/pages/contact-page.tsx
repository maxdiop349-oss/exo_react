import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

export default function Contactpage() {
  return (
   
  <section className='bg-gray-50 py-16 px-4'>
 <div className="max-w-6xl mx-auto">
        
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="w-12 h-1 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. 
            Suspendisse vulputate semper nunc eget rhoncus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Colonne de Gauche : Infos */}
          <div className="space-y-8 bg-[#d8cbc6] p-7">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get in touch</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, 
                congue justo at, lobortis orci.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-700">
                <MapPin size={20} className="text-gray-900" />
                <span>123 Fifth Avenue, New York, NY 10160</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <Mail size={20} className="text-gray-900" />
                <a href="mailto:contact@info.com" className="hover:underline">contact@info.com</a>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <Phone size={20} className="text-gray-900" />
                <span>9-334-7565-9787</span>
              </div>
            </div>
          </div>

          {/* Colonne de Droite : Formulaire */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name *" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <input 
                type="text" 
                placeholder="Last Name *" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>
            <input 
              type="email" 
              placeholder="Your Email Address *" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
            <textarea 
              placeholder="Message" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            ></textarea>
            
            <button 
              type="submit" 
              className="bg-gray-800 text-white px-8 py-3 rounded uppercase text-sm font-bold tracking-wide hover:bg-gray-700 transition-colors"
            >
              Send
            </button>
          </form>

        </div>
      </div>
  </section>
   
  );
};
