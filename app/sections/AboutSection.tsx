import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-card/50 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-headline text-4xl md:text-5xl text-center mb-12 text-primary">About Me</h2>
        <div className="bg-background/30 border-none shadow-2xl">
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <Image
                  src="https://placehold.co/300x300.png"
                  alt="Developer portrait"
                  width={200}
                  height={200}
                  className="rounded-full object-cover border-4 border-accent shadow-lg"
                  data-ai-hint="portrait developer"
                />
              </div>
              <div className="md:col-span-2 space-y-4 text-foreground/90">
                <p className="text-lg">
                  Hello! I&aposm a passionate and detail-oriented web developer with a knack for creating beautiful, functional, and user-centric websites. With a strong foundation in modern web technologies, I specialize in bringing digital visions to life.
                </p>
                <p>
                  My journey in web development started with a simple &quotHello, World!&quot and has since grown into a full-fledged passion for building complex applications and elegant UIs. I&aposm proficient in the MERN stack and always eager to learn new tools and frameworks.
                </p>
                <p>
                  When I&aposm not coding, you can find me exploring new coffee shops, contributing to open-source projects, or hiking in the great outdoors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection