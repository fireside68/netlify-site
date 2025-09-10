import React from 'react';

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-colors">
    <div className="text-primary-400 mb-2">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About: React.FC = () => {
  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Backend Development",
      description: "Elixir/Phoenix, Ruby on Rails, API Design, PostgreSQL"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "Frontend Development",
      description: "React, TypeScript, Astro, TailwindCSS"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Infrastructure",
      description: "Docker, Kubernetes, Jenkins, CI/CD"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Data & Integration",
      description: "RabbitMQ, Event Sourcing, REST APIs, WebSockets"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated software engineer with over 8 years of experience architecting scalable systems
              and building robust applications. My journey spans from nuclear engineering in the U.S. Navy
              to crafting elegant solutions for companies like{' '}
              <span className="text-primary-400">Northrop Grumman</span>{' '}
              and <span className="text-primary-400">Comoto Holdings</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not optimizing Elixir services or building React applications, you'll find me behind
              the decks as a DJ or in the studio producing electronic music. I believe that creativity in
              music enhances my approach to software development, bringing fresh perspectives to technical
              challenges.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Based in <span className="text-primary-400">Denver, Colorado</span>, I specialize in API
              development, event-driven architectures, and full-stack solutions that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;