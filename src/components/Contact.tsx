import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      href: "https://linkedin.com/in/cedricjohnson",
      label: "LinkedIn",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.485 2.5C1.11 6 0 4.881 0 3.5S1.11 1 2.495 1C3.87 1 4.98 2.119 4.98 3.5zm-.05 4.5H0v16h4.93V8zM20.448 8h-4.717c-1.258 0-2.48 0-3.66 1.83v-1.83H8.384v16h4.93v-8.777c0-.98.053-1.95.895-2.455.8-.476 1.834-.69 2.656-.69 1.13 0 2.457.24 2.457 2.926V24h4.928V15.006c0-7.394-3.66-8.706-7.802-8.706z" />
        </svg>
      )
    },
    {
      href: "https://github.com/your-github-profile",
      label: "GitHub",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.829.091-.645.356-1.088.654-1.336-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.7.115 2.5.352 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.65a3.746 3.746 0 011.029 2.682c0 3.823-2.339 4.673-4.566 4.92.359.309.678.92.678 1.855 0 1.336-.012 2.419-.012 2.747 0 .268.18.58.688.482C21.137 20.281 24 16.516 24 12.017 24 6.484 19.522 2 14 2h-2z" />
        </svg>
      )
    },
    {
      href: "https://twitter.com/your-twitter-handle",
      label: "Twitter",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.536 8.528c.01 1.488-.235 2.97-.905 4.316-.67.75-1.442 1.41-2.31 1.956-1.258.77-2.688 1.15-4.153 1.15-1.464 0-2.893-.38-4.152-1.15-.868-.546-1.64-1.206-2.31-1.956-.67-.75-.915-1.48-.905-2.228.006-.723.238-1.43.682-2.072C6.01 6.5 7.02 5.6 8.156 5.02c1.07-.54 2.21-.81 3.37-.81h.004c1.16 0 2.3.27 3.37.81 1.137.58 2.148 1.48 2.872 2.508.444.642.676 1.349.682 2.072zm-3.92-1.072c-.006-.39-.12-.76-.326-1.096-.205-.336-.484-.614-.836-.83-.352-.216-.745-.34-1.156-.37-.41-.03-.82-.008-1.22.062-.4.07-.79.208-1.144.406-.354.198-.67.458-.93.77-.26.312-.46.68-.584 1.07-.123.39-.18.8-.168 1.21.012.41.094.81.252 1.18.158.37.368.7.636.97.268.27.57.488.91.64.34.15.708.23 1.088.23h.004c.38 0 .748-.08 1.088-.23.34-.152.642-.37.91-.64.268-.27.478-.6.636-.97.158-.37.24-.77.252-1.18.012-.41-.045-.82-.168-1.21z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </div>

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg animate-fade-in-up">
          <p className="text-lg text-gray-300 text-center mb-8">
            Whether you're interested in collaborating on a software project, discussing a music performance, or
            just want to say hello, feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center text-gray-400">
            <p className="mb-4">You can also find me on:</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;