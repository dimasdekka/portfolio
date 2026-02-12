// src/app/Archive/page.tsx

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import ProjectDetail from './ProjectDetail';
import projects from '@/data/projects';
import TextPressure from '@/blocks/TextAnimations/TextPressure/TextPressure';

const FallingText = dynamic(
  () => import('@/blocks/TextAnimations/FallingText/FallingText'),
  { ssr: false }
);
const Threads = dynamic(() => import('@/blocks/Backgrounds/Threads/Threads'), {
  ssr: false,
});
const CircularGallery = dynamic(
  () => import('@/blocks/Components/CircularGallery/CircullarGallery'),
  { ssr: false }
);

export default function Archive() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <main className="relative flex h-full flex-grow flex-col items-center pt-20">
        <div
          className="hidden md:block"
          style={{
            width: '100%',
            height: '600px',
            position: 'absolute',
            top: '0',
            zIndex: -1,
            opacity: 0.5,
          }}
        >
          {isDesktop && (
            <Threads
              amplitude={2.5}
              distance={0}
              enableMouseInteraction={false}
            />
          )}
        </div>

        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Archives"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-center text-3xl font-extrabold md:text-7xl"
          />
        </div>

        <div
          className="max-w-8xl mx-auto w-full px-4"
          style={{ height: '600px' }}
        >
          <CircularGallery
            items={projects.map((project) => ({
              image: project.imageSrc,
              text: project.title,
            }))}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>

        <div className="mx-auto my-10 flex w-full max-w-5xl flex-col p-4 md:my-20 md:p-4">
          <div className="hidden md:block">
            {isDesktop && (
              <FallingText
                text={`As a web and mobile developer, I focus on building creative digital experiences. Whether it's crafting responsive websites, mobile interfaces, or experimental UI animations, I enjoy turning ideas into functional and aesthetic solutions.`}
                highlightWords={[
                  'web',
                  'mobile',
                  'developer',
                  'digital',
                  'responsive',
                  'interfaces',
                  'UI',
                  'aesthetic',
                  'solutions',
                ]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="2rem"
                mouseConstraintStiffness={0.9}
              />
            )}
          </div>
          <div className="mb-10 md:hidden">
            {!isDesktop && (
              <FallingText
                text={`Besides being a developer and content creator, I enjoy working on side projects and exploring creative ideas through technology. It's a great way to keep learning, solve real-world problems, and connect with others who share the same passion. Here are some of the projects I've worked on:`}
                highlightWords={[
                  'side projects',
                  'creative',
                  'problems',
                  'passion',
                  'projects',
                ]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="1rem"
                mouseConstraintStiffness={0.9}
              />
            )}
          </div>
          <div className="mt-20 md:mt-40">
            <TextPressure
              text="My Projects"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
            {projects.map((project) => (
              <ProjectDetail key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-20 flex w-full items-center justify-center border-t border-white/[.15] p-4 text-sm font-light text-white/50">
        <p>
          &copy; {new Date().getFullYear()} Dimas Dekananta. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
