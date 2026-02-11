'use client';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';

// Import components and blocks
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import TrueFocus from '@/blocks/TextAnimations/TrueFocus/TrueFocus';
import Threads from '@/blocks/Backgrounds/Threads/Threads';
import ScrollVelocity from '@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillTag from '@/components/SkillTag';
import ProjectCard from '@/components/ProjectCard';
import Lanyard from '@/components/Lanyard';

// Import data and constants
import projects from '@/data/projects';
import { devSkills, contentSkills } from '@/data/skills';
import { ANIMATION, LAYOUT, URLS, ASSETS, USER_INFO } from '@/constants';


export default function Home() {
  return (
    <>
      {/* Lanyard Component - positioned to hang from the top right */}
      <div className="absolute inset-y-0 right-0 z-20 h-screen w-[30%] overflow-visible">
        <Lanyard fov={10} />
      </div>

      {/* Main content area */}
      <main className={`relative flex h-full flex-grow flex-col items-center pt-${LAYOUT.HERO_PADDING_TOP}`}>
        {/* Background threads - desktop */}
        <div
          style={{
            width: '100%',
            height: `${LAYOUT.THREADS_HEIGHT}px`,
            position: 'absolute',
            bottom: '50',
          }}
          className="hidden md:block"
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Background threads - mobile */}
        <div
          style={{
            width: '100%',
            height: `${LAYOUT.THREADS_HEIGHT}px`,
            position: 'absolute',
            bottom: '50',
          }}
          className="opacity-10 md:hidden"
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Hero Section */}
        <div className="relative my-4 flex w-full items-center justify-center px-4 text-center font-bold md:mt-15 md:px-0">
          <BlurText
            text={USER_INFO.NAME}
            delay={ANIMATION.BLUR_TEXT_DELAY}
            animateBy="letters"
            direction="top"
            className="text-center text-4xl md:text-7xl lg:text-9xl"
          />
        </div>

        <div className="mt-1 animate-fadeIn text-center font-bold opacity-0 md:mt-3">
          <TrueFocus
            sentence={USER_INFO.ROLES}
            manualMode={true}
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </div>

        {/* style jsx block is fine */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>
        <div className="w-full items-center mt-[300px] relative h-[300px] hidden md:block">
          <ScrollVelocity
            texts={['Unicodes', 'Dimas Dekananta']}
            velocity={100}
            className="custom-scroll-text"
          />
        </div>
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 space-x-0">
          {/* Tech Stack Section Start */}
          <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
            {/* DEVELOP Card */}
            {/* custom-corner-border class is kept from previous step */}
            {/* hover:scale-105 on the card wrapper is kept */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                DEVELOP
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Started creating Web Development using NextJS, React, and
                Tailwind and eventually switched to Mobile Development using
                React Native
              </p>
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Skillset &amp; tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {devSkills.map((skill) => (
                  <SkillTag key={skill.name} skillName={skill.name} />
                ))}
              </div>
            </div>

            {/* CONTENTS Card */}
            {/* custom-corner-border class is kept from previous step */}
            {/* hover:scale-105 on the card wrapper is kept */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text:lg tracking-wide mb-3">
                CREATE {/* Updated title based on your code */}
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Aspiring content creator and junior developer, passionate about
                telling stories through both words and code. Currently learning
                and building as I go. {/* Updated description */}
              </p>
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Skillset &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {contentSkills.map((skill) => (
                  <SkillTag key={skill.name} skillName={skill.name} />
                ))}
              </div>
            </div>
          </div>
          {/* Tech Stack Section End */}

          {/* What I do Section */}
          <div className="flex flex-col">
            <BlurText
              text="What I do"
              delay={ANIMATION.BLUR_TEXT_DELAY}
              animateBy="words"
              direction="top"
              className="text-3xl font-extrabold md:text-7xl"
            />

            <div className="mb-20 mt-10 hidden md:block">
              <ProfileCard
                name={USER_INFO.NAME}
                title={USER_INFO.TITLE_DESKTOP}
                handle={USER_INFO.HANDLE}
                status="Online"
                contactText="Contact Me"
                grainUrl={ASSETS.GRAIN_TEXTURE}
                iconUrl={ASSETS.ICON_PATTERN}
                avatarUrl={ASSETS.PROFILE_AVATAR}
                miniAvatarUrl={ASSETS.PROFILE_MINI_AVATAR}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => window.open(URLS.LINKEDIN, '_blank')}
              />
            </div>

            <div className="mb-20 mt-10 md:hidden">
              <ProfileCard
                name={USER_INFO.NAME}
                title={USER_INFO.TITLE_MOBILE}
                handle={USER_INFO.HANDLE}
                status="Online"
                grainUrl={ASSETS.GRAIN_TEXTURE}
                iconUrl={ASSETS.ICON_PATTERN}
                contactText="Contact Me"
                avatarUrl={ASSETS.PROFILE_AVATAR}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => window.open(URLS.LINKEDIN, '_blank')}
              />
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="mt-5 flex w-full items-center justify-center p-4 md:mt-25">
          <BlurText
            text="My Journey"
            delay={ANIMATION.BLUR_TEXT_DELAY}
            animateBy="words"
            direction="top"
            className="text-3xl font-extrabold md:text-7xl"
          />
        </div>
        <ExperienceTimeline />
        <div className="mt-5 flex w-full items-center justify-center p-4 font-extrabold md:mt-25">
          <BlurText
            text="My Projects"
            delay={ANIMATION.BLUR_TEXT_DELAY}
            animateBy="letters"
            direction="top"
            className="text-3xl font-extrabold md:text-7xl"
          />
        </div>
        <GitHubCalendar username={USER_INFO.GITHUB_USERNAME} />
        {/* Projects Section Start */}
        {/* Modified this div to use a grid layout for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1400px] mx-auto mt-10">
          {/* Now mapping over the imported projects array */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {/* Projects Section End */}
      </main>
      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        {' '}
        {/* Added margin top */}
        <p>
          &copy; {new Date().getFullYear()} Dimas Dekananta. All rights
          reserved.
        </p>{' '}
        {/* Updated name */}
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}
