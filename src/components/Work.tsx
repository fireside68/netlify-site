import React from 'react';

interface JobExperienceProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  animationDelay?: string;
}

const JobExperience: React.FC<JobExperienceProps> = ({
  title,
  company,
  period,
  achievements,
  animationDelay = '0s'
}) => (
  <div
    className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors animate-fade-in-up"
    style={{ animationDelay }}
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-primary-400 font-semibold">{company}</p>
      </div>
      <div className="text-gray-400">
        <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">{period}</span>
      </div>
    </div>
    <ul className="text-gray-300 space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-primary-400 mt-1">•</span>
          <span dangerouslySetInnerHTML={{ __html: achievement }} />
        </li>
      ))}
    </ul>
  </div>
);

const Work: React.FC = () => {
  const experiences = [
    {
      title: "Contract Senior Software Engineer",
      company: "KFORCE / Northrop Grumman",
      period: "Nov 2023 - Apr 2025",
      achievements: [
        'Architected an Elixir service gateway that unified four legacy REST & SOAP services, <span class="text-primary-400">reducing latency by 50%</span>',
        'Built event-driven fulfillment service orchestrating data flow among OMS, WMS, and telemetry systems',
        'Migrated core telemetry pipeline from monolithic service to modular Phoenix contexts, <span class="text-primary-400">tripling throughput</span>',
        'Owned CI/CD (Jenkins, Docker, Kubernetes) and advocated infrastructure-as-code patterns to <span class="text-primary-400">cut deployment time by 75%</span>'
      ]
    },
    {
      title: "Software Engineer",
      company: "Comoto Holdings (RevZilla, Cycle Gear, J&P Cycles)",
      period: "Aug 2021 - Jun 2023",
      achievements: [
        'Scaled e-commerce backend serving <span class="text-primary-400">2M monthly users</span>; optimized REST API & caching, <span class="text-primary-400">slashing response times by 80%</span>',
        'Refined pricing service to ensure accurate SKU-specific price display across product pages and channels',
        'Coordinated with other engineers to evaluate and improve software and hardware interfaces'
      ]
    },
    {
      title: "Freelance Integration Engineer",
      company: "Unaffiliated Studios",
      period: "Jun 2020 - Jul 2021",
      achievements: [
        'Delivered cross-system integrations for healthcare client: ingested HL7 feeds, transformed via FHIR, and synced with EHR',
        'Built fault-tolerant job orchestration in Oban, syncing CRM and billing data between three SaaS platforms',
        'Led re-platforming of legacy PHP services into Elixir umbrella apps, <span class="text-primary-400">cutting infra spend by 35%</span>'
      ]
    }
  ];

  return (
    <section id="work" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <JobExperience
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              achievements={experience.achievements}
              animationDelay={`${index * 0.2}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;