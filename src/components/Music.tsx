import React from 'react';

interface MusicServiceProps {
  icon: JSX.Element;
  title: string;
  description: string;
  animationDelay?: string;
}

const MusicService: React.FC<MusicServiceProps> = ({
  icon,
  title,
  description,
  animationDelay = '0s'
}) => (
  <div
    className="bg-slate-700 p-8 rounded-xl text-center hover:bg-slate-600 transition-colors animate-fade-in-up"
    style={{ animationDelay }}
  >
    <div className="text-primary-400 mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-accent-400">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Music: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    e.preventDefault();
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Music Production",
      description: "Creating original electronic tracks with a focus on progressive house, techno, and ambient soundscapes."
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      title: "DJ Performances",
      description: "Live mixing and performing at events, clubs, and private parties across the Denver area and beyond."
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16" />
        </svg>
      ),
      title: "Digital Releases",
      description: "Check out my latest tracks, mixes, and collaborations on SoundCloud and other streaming platforms."
    }
  ];

  return (
    <section id="music" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Music & DJ</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Music is where I channel my creativity and passion. I produce electronic music and perform as a DJ,
            bringing energy and innovation to every set. The same attention to detail that goes into my code
            goes into crafting the perfect mix.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <MusicService
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              animationDelay={`${index * 0.2}s`}
            />
          ))}
        </div>

        <div className="bg-slate-700 p-8 rounded-xl text-center">
          <div className="music-wave h-2 w-full rounded-full mb-6" />
          <h3 className="text-2xl font-bold mb-4">Latest Tracks</h3>
          <p className="text-gray-300 mb-6">Music player integration coming soon - will automatically sync with SoundCloud releases</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://soundcloud.com/illixrmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Listen on SoundCloud
            </a>
            <a
              href="#contact"
              onClick={(e) => handleButtonClick(e, '#contact')}
              className="border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
            >
              Book a Performance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
