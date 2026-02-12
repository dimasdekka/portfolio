'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import ScrambledText from '@/blocks/TextAnimations/ScrambledText/ScrambledText';
// Removed unused import
// import { comma } from 'postcss/lib/list';

import type { Experience } from '@/lib/types';

const experiences: Experience[] = [
  // ... your experiences array - Keep this array as is
  {
    id: 1,
    title: 'Bachelor of Information Systems',
    company: 'Universitas Pamulang',
    year: '2024 - Present',
    description:
      'Started my academic journey at Universitas Pamulang, majoring in Information Systems. This program has provided me with a strong foundation in technology, system development, and digital solutions that address real-world problems.',
    logo: '/exp_logos/unpam-logo.png',
  },
  {
    id: 2,
    title: 'Product Consultant',
    company: 'Avian Brands',
    year: '2024',
    description:
      'Worked as a Product Consultant at Avian Brands, where I was responsible for delivering product knowledge to customers and partners. This role enhanced my communication skills, product expertise, and experience in direct customer engagement and field marketing.',
    logo: '/exp_logos/avian-logo.png',
  },
  {
    id: 3,
    title: 'Coding Tutors',
    company: 'Alhazen Academy',
    year: '2024 - Present',
    description: `Currently serving as a Coding Tutor at Alhazen Academy. I assist students in learning both fundamental and advanced programming concepts. I design engaging lessons and guide learners through hands-on coding exercises, creating a meaningful and enjoyable learning experience.`,
    logo: '/exp_logos/alhazen-logo.png',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01,
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-10 w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute bottom-0 left-1/2 top-0 w-1 -translate-x-1/2 transform bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)]"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
        // Optional: Add will-change property as a hint to the browser (use with caution)
        // className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2 will-change-top"
      />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div
            key={exp.id}
            className="relative grid grid-cols-1 items-start gap-x-20 rounded-2xl bg-black p-6 shadow-lg md:grid-cols-2 md:bg-transparent"
          >
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            {/* Side 1: Title, Company, Year, Logo */}
            <div
              className={`flex flex-col ${
                index % 2 === 0
                  ? 'md:items-end md:text-right'
                  : 'md:items-start md:text-left'
              } ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
            >
              <h3 className="font-bold text-gray-100">
                <ScrambledText
                  className="text-[clamp(18px,2vw,24px)] leading-tight"
                  radius={70}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  {exp.title}
                </ScrambledText>
              </h3>

              <div className="mb-1">
                <ScrambledText
                  className="text-[clamp(14px,1.6vw,18px)] text-cyan-400"
                  radius={50}
                  duration={1}
                  speed={0.4}
                  scrambleChars=".:"
                >
                  {exp.company}
                </ScrambledText>
              </div>

              <span className="mb-2" style={{ letterSpacing: '0.4em' }}>
                <ScrambledText
                  className="text-[clamp(12px,1.5vw,18px)] text-gray-400"
                  radius={40}
                  duration={1}
                  speed={0.4}
                  scrambleChars=".:"
                >
                  {exp.year}
                </ScrambledText>
              </span>

              <div className="relative my-5 flex h-10 w-10 items-center justify-center md:my-0">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
            </div>

            {/* Side 2: Description */}
            <div
              className={`text-gray-300 ${
                index % 2 !== 0 ? 'md:text-right' : 'text-left'
              } ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
            >
              <ScrambledText
                className="text-[clamp(12px,1.8vw,18px)] leading-relaxed"
                radius={70}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                {exp.description}
              </ScrambledText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
