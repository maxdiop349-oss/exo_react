import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function Contactpage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,

  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
     toast.success("Formulaire soumis avec succés");
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      message: "",
    });
  };
  return (

    <section className='bg-gray-50 py-16 px-4'>
      <div className="max-w-6xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Contact</h2>
          <div className="w-12 h-1 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-black font-bold max-w-2xl mx-auto italic">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
            Suspendisse vulputate semper nunc eget rhoncus.
          </p>
        </div>
        <div className="relative">
          {/* Colonne de Gauche : Infos */}
          <div className="space-y-8 bg-[#d8cbc6] px-20 py-40 max-w-1/2">
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
                <Link to="mailto:contact@info.com" className="hover:underline">contact@info.com</Link>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <Phone size={20} className="text-gray-900" />
                <span>9-334-7565-9787</span>
              </div>
            </div>
          </div>
          {/* Colonne de Droite : Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5 shadow-xl shadow-gray-300 rounded p-15 absolute right-0 top-1/2 -translate-y-1/2 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name='firstName'
                placeholder="First Name *"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name='lastName'
                placeholder="Last Name *"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name='email'
              placeholder="Your Email Address *"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              name='message'
              value={formData.message}
              onChange={handleChange}
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
      {/* section carte */}
         <div className="w-full h-100 mt-16">
      <iframe
        title="map"
        src="https://www.google.com/maps?q=Dakar&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>
    </section>

  );
};
