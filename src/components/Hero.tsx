import React from 'react';

const Hero: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">Cedric Johnson</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Senior Software Engineer & Music Artist
        </p>
        <p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Building scalable applications with Elixir/Phoenix while crafting electronic music experiences.
          8+ years of turning complex problems into elegant solutions.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#work"
            onClick={(e) => handleButtonClick(e, '#work')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect cursor-pointer"
          >
            View My Work
          </a>
          <a
            href="#music"
            onClick={(e) => handleButtonClick(e, '#music')}
            className="border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Listen to My Music
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;