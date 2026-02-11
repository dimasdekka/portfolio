// src/app/Hackathons.tsx

'use client';

import React from 'react';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import FallingText from '@/blocks/TextAnimations/FallingText/FallingText';
import Threads from '@/blocks/Backgrounds/Threads/Threads';
import HackathonEntry from './HackathonEntry';
import CircularGallery from '@/blocks/Components/CircularGallery/CircullarGallery';
import TextPressure from '@/blocks/TextAnimations/TextPressure/TextPressure';

// Define your hackathon entry data
const hackathonEntriesData = [
  {
    entryNumber: '01',
    title: 'Campus Bridge',
    // award: '3rd Place',
    description:
      'CampusBridge is a React Native-based mobile application designed to simplify the thesis guidance process between students and lecturers. This application is equipped with real-time chat features, video call consultations, guidance scheduling, and efficient thesis progress monitoring.This project utilizes Stream as the main infrastructure for communication, as well as various modern tools to build responsive and high-performance UIs.',
    imageSrc: '/proj/projectOne.svg', // Replace with the actual image path
    projectLink: 'https://github.com/dimasdekka/CampusBridge', // <-- Add the link for Procrash
    trophyType: 'third', // Specify the trophy type
    techStackIcons: [
      // <-- Add paths to tech stack icons for Procrash
      '/techstack/flutterflow.svg',
      '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: '02',
    title: 'Unimovie',
    // award: 'Special Award',
    description:
      'Unimovie is a modern, React-based web application designed to provide users with a seamless and engaging movie discovery experience. Built with performance and user experience in mind, Unimovie allows users to search for movies, browse trending titles, and view detailed information such as synopses, ratings, release dates, and cast members — all in a clean, responsive interface.',
    imageSrc: '/proj/projectTwo.svg', // Replace with the actual image path
    projectLink: 'https://github.com/dimasdekka/UniMovie-React-Movie-App', // <-- Add the link for Talento
    trophyType: 'special', // Specify the trophy type
    techStackIcons: [
      // <-- Add paths to tech stack icons for Talento
      '/techstack/javascript.svg',
      '/techstack/css.svg',
    ],
  },
  {
    entryNumber: '03',
    title: 'Dalleys Voucher',
    // award: '4th Place',
    description:
      'Scan your voucher, to get free room. This dalleys voucher uses QR Code or code of voucher to activate voucher, analyze habits, guide your budget towards goals, and reward smart money decisions. Dalleys makes understanding your finances instant and engaging.',
    imageSrc: '/proj/projectThree.svg', // Replace with the actual image path
    projectLink: 'https://github.com/dimasdekka/CafeDalleyVoucher', // <-- Add the link for KachingKo
    trophyType: 'participant', // Specify the trophy type (using participant as a placeholder for 4th)
    techStackIcons: [
      // <-- Add paths to tech stack icons for KachingKo
      '/techstack/nextjs.svg',
      '/techstack/tailwind.svg',
      '/techstack/gemini.svg',
    ],
  },
];

export default function Hackathons() {
  return (
    <>
      {/* Main content area for Hackathons */}

      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        {/* Make this hidden on mobile */}
        {/* Added responsive hidden class */}

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
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Hackathon Entries Section */}
        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Archives"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-3xl md:text-7xl font-extrabold text-center"
          />
        </div>

        {/* Larger CircularGallery Container */}
        <div
          className="w-full max-w-8xl mx-auto px-4"
          style={{ height: '600px' }}
        >
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.1} />
        </div>

        {/* <RollingGallery /> */}

        {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20">
          {' '}
          {/* Changed p-15 to p-4 */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block">
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
          </div>
          {/* Falling Text for Mobile */}
          {/* Adjusted margin bottom */}
          <div className="md:hidden mb-10">
            {' '}
            {/* Changed mb-25 to mb-10 for smaller mobile margin */}
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
          </div>
          {/* Render Hackathon Entries */}
          {/* Adjusted margin top for responsiveness */}
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
            />{' '}
            {/* Adjusted margin top */}
            {hackathonEntriesData.map((entry, index) => (
              <HackathonEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                // award={entry.award}
                description={entry.description}
                imageSrc={entry.imageSrc}
                projectLink={entry.projectLink} // Pass the project link
                trophyType={entry.trophyType} // Pass the trophy type
                techStackIcons={entry.techStackIcons} // Pass the tech stack icons array
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>
          &copy; {new Date().getFullYear()} Dimas Dekananta. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
