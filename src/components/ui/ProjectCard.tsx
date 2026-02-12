'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ProjectCardProps } from '@/lib/types';
import { ANIMATION_DURATION } from '@/lib/constants';

/**
 * Layout pattern configuration for ProjectCard
 * Determines position of number, text alignment, and image order
 */
const CARD_PATTERNS = {
  0: {
    numberPos: 'top-4 left-4',
    textAlign: 'text-right items-end',
    textOrder: 'order-1',
    imageOrder: 'order-2',
  },
  1: {
    numberPos: 'bottom-4 left-4',
    textAlign: 'text-right items-end',
    textOrder: 'order-2',
    imageOrder: 'order-1',
  },
  2: {
    numberPos: 'top-4 right-4',
    textAlign: 'text-left items-start',
    textOrder: 'order-1',
    imageOrder: 'order-2',
  },
  3: {
    numberPos: 'bottom-4 right-4',
    textAlign: 'text-left items-start',
    textOrder: 'order-2',
    imageOrder: 'order-1',
  },
} as const;

/**
 * ProjectCard Component
 * Displays a project with rotating layout patterns
 *
 * @param project - Project data object
 * @param index - Index for determining layout pattern
 */
const ProjectCard: React.FC<ProjectCardProps> = React.memo(
  ({ project, index }) => {
    const pattern = CARD_PATTERNS[(index % 4) as keyof typeof CARD_PATTERNS];

    const handleImageClick = useCallback(() => {
      if (project.link) {
        window.open(project.link, '_blank', 'noopener,noreferrer');
      }
    }, [project.link]);

    return (
      <motion.div
        className="relative m-5 flex h-full flex-col justify-between overflow-hidden border border-white border-opacity-20 bg-transparent px-4 py-6 md:m-0 md:px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: ANIMATION_DURATION.NORMAL }}
      >
        {/* Project Number - Absolutely Positioned */}
        <div
          className={`absolute ${pattern.numberPos} p-6 text-3xl font-bold text-white text-opacity-10 md:text-6xl`}
          aria-hidden="true"
        >
          {project.number}
        </div>

        {/* Content Area */}
        <div className="flex h-full flex-col justify-between">
          {/* Text Content Block */}
          <div
            className={`z-10 flex flex-col space-y-4 p-6 ${pattern.textAlign} ${pattern.textOrder}`}
          >
            {/* Title and Description */}
            <div>
              <h3 className="text-md font-semibold text-white md:text-xl">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 md:text-sm">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex gap-2">
              {project.techstack.map((icon, idx) => (
                <Image
                  key={`${project.id}-tech-${idx}`}
                  src={icon}
                  alt={`Technology ${idx + 1}`}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              ))}
            </div>
          </div>

          {/* Project Image Block */}
          <motion.button
            className={`relative z-10 w-full flex-grow overflow-hidden rounded-xl bg-transparent p-0 ${pattern.imageOrder} transition-all`}
            onClick={handleImageClick}
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: ANIMATION_DURATION.NORMAL }}
            aria-label={`View ${project.title} project`}
            type="button"
          >
            <Image
              src={project.imageSrc}
              alt={`${project.title} preview`}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </motion.button>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
