'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { SkillTagProps } from '@/lib/types';
import { ANIMATION_DURATION, ANIMATION_EASING } from '@/lib/constants';

/**
 * SkillTag Component
 * Displays a skill badge with animated hover effects
 *
 * @param skillName - The name of the skill to display
 */
const SkillTag: React.FC<SkillTagProps> = ({ skillName }) => {
  return (
    <motion.span
      className="rounded-full border border-gray-600 bg-transparent px-4 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-400 hover:text-cyan-400 md:text-sm"
      whileHover={{
        scale: 1.05,
        borderColor: '#22d3ee',
        color: '#22d3ee',
      }}
      transition={{
        duration: ANIMATION_DURATION.FAST,
        ease: ANIMATION_EASING.IN_OUT,
      }}
      role="badge"
      aria-label={`Skill: ${skillName}`}
    >
      {skillName}
    </motion.span>
  );
};

SkillTag.displayName = 'SkillTag';

export default SkillTag;
