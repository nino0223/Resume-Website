import React from 'react';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start text-left p-10">
      <div className="space-y-5 w-1/2">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary tracking-tighter">
          Nino Miladinovski
        </h1>
        <p className="text-lg md:text-xl max-w-2xl ">
          A creative web developer transforming ideas into sleek, modern, and interactive digital experiences.
        </p>
        <div className="pt-6">
          <a href="#portfolio">
            <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </button>
          </a>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center">
        <Image
          src="/coding.jpg"
          alt="A person coding on a desk with two monitors and a flow sketch"
          fill
          className="object-cover mask-l-from-90% mask-l-to-100%"
          style={{ objectPosition: 'left' }}
        />
      </div>
    </section>
  )
}

export default HomeSection