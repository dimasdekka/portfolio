import React from 'react';
import { motion } from 'framer-motion';
import type { SkillTagProps } from '@/types';

/**
 * SkillTag component displays a skill badge with hover animation
 * @param skillName - The name of the skill to display
 */
const SkillTag: React.FC<SkillTagProps> = ({ skillName }) => {
  return (
    <motion.span
      className="border border-gray-600 bg-transparent px-4 py-1 text-xs font-medium text-gray-300 md:text-sm rounded-full"
      whileHover={{ scale: 1.05, borderColor: '#4dd0e1', color: '#4dd0e1' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {skillName}
    </motion.span>
  );
};

export default SkillTag;
