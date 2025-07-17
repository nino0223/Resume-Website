import React from 'react'
import { PortfolioCard } from '../components/PortfolioCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product management, shopping cart, and payment integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'e-commerce website'
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'dashboard app'
  },
  {
    title: 'Blogging Website',
    description: 'A content management system for writers to publish articles, manage posts, and engage with readers.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'blog interface'
  },
  {
    title: 'Portfolio Showcase',
    description: 'A personal portfolio website to display projects and skills, much like this one.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'portfolio website'
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard to monitor social media performance and user engagement metrics.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'analytics dashboard'
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center bg-card/50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-headline text-4xl md:text-5xl text-center mb-12 text-primary">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection