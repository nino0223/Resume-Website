import { BrushIcon, ChartNoAxesColumnIncreasingIcon, CodeIcon } from 'lucide-react';
import React from 'react'

const SkillsList = [
  {
    icon: <CodeIcon className="w-10 h-10 text-accent place-content-center" />,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and web applications from the ground up using modern technologies.',
  },
  {
    icon: <BrushIcon className="w-10 h-10 text-accent" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces that provide an exceptional user experience and look stunning.',
  },
  {
    icon: <ChartNoAxesColumnIncreasingIcon  className="w-10 h-10 text-accent" />,
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines to attract more organic traffic and grow your online presence.',
  },
];

const Skills = () => {
  return (
     <section id="services" className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-headline text-4xl md:text-5xl text-center mb-12 text-primary">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SkillsList.map((SkillsList, index) => (
            <div key={index} className="card-bg text-center p-6 transition duration-300 transform hover:-translate-y-2">
              <div className="items-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="glassbg rounded-full p-3 inline-flex">
                    {SkillsList.icon}
                  </div>
                </div>
                <h2 className="font-headline text-2xl text-primary">{SkillsList.title}</h2>
              </div>
              <div>
                <p className="text-foreground/80">{SkillsList.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills