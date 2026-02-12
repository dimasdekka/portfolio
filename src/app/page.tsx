'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import TrueFocus from '@/blocks/TextAnimations/TrueFocus/TrueFocus';
import ScrollVelocity from '@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Threads = dynamic(() => import('@/blocks/Backgrounds/Threads/Threads'), {
  ssr: false,
});
const GitHubCalendar = dynamic(() => import('react-github-calendar'), {
  ssr: false,
});
import { ProfileCard, SkillTag, ProjectCard } from '@/components/ui';
import { ExperienceTimeline, Lanyard } from '@/components';

import projects from '@/data/projects';
import { devSkills, contentSkills } from '@/data/skills';

import { ANIMATION, LAYOUT, URLS, ASSETS, USER_INFO } from '@/lib/constants';
import {
  TECH_STACK_CARDS,
  SECTION_TITLES,
  BLUR_TEXT_DEFAULTS,
  PROFILE_CARD_CONFIG,
  THREADS_CONFIG,
  RESPONSIVE,
} from './config';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-20 h-screen w-full">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      <main
        className={`relative flex h-full flex-grow flex-col items-center pt-${LAYOUT.HERO_PADDING_TOP}`}
      >
        <div
          style={{
            width: '100%',
            height: `${LAYOUT.THREADS_HEIGHT}px`,
            position: 'absolute',
            bottom: '50',
          }}
          className={
            isDesktop ? RESPONSIVE.HIDDEN_MOBILE : RESPONSIVE.OPACITY_MOBILE
          }
        >
          <Threads
            amplitude={THREADS_CONFIG.AMPLITUDE}
            distance={THREADS_CONFIG.DISTANCE}
            enableMouseInteraction={THREADS_CONFIG.ENABLE_MOUSE}
          />
        </div>

        <div className="md:mt-15 relative my-4 flex w-full items-center justify-center px-4 text-center font-bold md:px-0">
          <BlurText
            text={USER_INFO.NAME}
            delay={ANIMATION.BLUR_TEXT_DELAY}
            animateBy="letters"
            direction="top"
            className="text-center text-4xl md:text-7xl lg:text-9xl"
          />
        </div>

        <div className="animate-fadeIn mt-1 text-center font-bold opacity-0 md:mt-3">
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
        <div className="relative mt-[300px] hidden h-[300px] w-full items-center md:block">
          <ScrollVelocity
            texts={['Unicodes', 'Dimas Dekananta']}
            velocity={100}
            className="custom-scroll-text"
          />
        </div>
        <div className="md:w-9xl md:mt-35 md:space-x-50 mt-10 flex w-full flex-grow flex-col items-center justify-center space-x-0 md:flex-row">
          <div className="mb-20 mt-10 flex w-full max-w-lg flex-col space-y-8 px-4 md:px-0">
            {TECH_STACK_CARDS.map((card) => (
              <div
                key={card.id}
                className="custom-corner-border relative rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <h3 className="mb-3 text-lg font-bold tracking-wide text-white md:text-2xl">
                  {card.title}
                </h3>
                <p className="md:text-md mb-5 mt-2 text-sm leading-relaxed text-gray-400">
                  {card.description}
                </p>
                <h4 className="mb-3 text-base font-semibold text-cyan-300">
                  Skillset &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(card.skillsKey === 'dev' ? devSkills : contentSkills).map(
                    (skill) => (
                      <SkillTag key={skill.name} skillName={skill.name} />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <BlurText
              text={SECTION_TITLES.WHAT_I_DO}
              delay={ANIMATION.BLUR_TEXT_DELAY}
              animateBy="words"
              direction={BLUR_TEXT_DEFAULTS.DIRECTION}
              className="text-3xl font-extrabold md:text-7xl"
            />

            <div className={`mb-20 mt-10 ${RESPONSIVE.HIDDEN_MOBILE}`}>
              <ProfileCard
                name={USER_INFO.NAME}
                title={USER_INFO.TITLE_DESKTOP}
                handle={USER_INFO.HANDLE}
                status={PROFILE_CARD_CONFIG.STATUS}
                contactText={PROFILE_CARD_CONFIG.CONTACT_TEXT}
                grainUrl={ASSETS.GRAIN_TEXTURE}
                iconUrl={ASSETS.ICON_PATTERN}
                avatarUrl={ASSETS.PROFILE_AVATAR}
                miniAvatarUrl={ASSETS.PROFILE_MINI_AVATAR}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => window.open(URLS.LINKEDIN, '_blank')}
              />
            </div>

            <div className={`mb-20 mt-10 ${RESPONSIVE.HIDDEN_DESKTOP}`}>
              <ProfileCard
                name={USER_INFO.NAME}
                title={USER_INFO.TITLE_MOBILE}
                handle={USER_INFO.HANDLE}
                status={PROFILE_CARD_CONFIG.STATUS}
                grainUrl={ASSETS.GRAIN_TEXTURE}
                iconUrl={ASSETS.ICON_PATTERN}
                contactText={PROFILE_CARD_CONFIG.CONTACT_TEXT}
                avatarUrl={ASSETS.PROFILE_AVATAR}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => window.open(URLS.LINKEDIN, '_blank')}
              />
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="md:mt-25 mt-5 flex w-full items-center justify-center p-4">
          <BlurText
            text={SECTION_TITLES.MY_JOURNEY}
            delay={ANIMATION.BLUR_TEXT_DELAY}
            animateBy="words"
            direction={BLUR_TEXT_DEFAULTS.DIRECTION}
            className="text-3xl font-extrabold md:text-7xl"
          />
        </div>
        <ExperienceTimeline />
        <div className="md:mt-25 mt-5 flex w-full items-center justify-center p-4 font-extrabold">
          <BlurText
            text={SECTION_TITLES.MY_PROJECTS}
            delay={ANIMATION.BLUR_TEXT_DELAY}
            animateBy="letters"
            direction={BLUR_TEXT_DEFAULTS.DIRECTION}
            className="text-3xl font-extrabold md:text-7xl"
          />
        </div>
        <GitHubCalendar username={USER_INFO.GITHUB_USERNAME} />
        <div className="mx-auto mt-10 grid w-full max-w-[1400px] grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
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
