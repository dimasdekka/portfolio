import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const { number, title, description, imageSrc, link, techstack } = project;

  return (
    <div className="flex w-full flex-col items-start border-b border-white/[.15] py-6 last:border-b-0 md:flex-row md:py-10">
      <div className="mb-4 mr-0 flex w-full flex-shrink-0 text-center text-4xl font-extrabold sm:text-5xl md:mb-0 md:mr-8 md:w-auto md:text-left md:text-6xl">
        {number}
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        <div className="mb-6 flex aspect-video w-full flex-shrink-0 items-center justify-center overflow-hidden rounded-lg md:mb-0 md:mr-8 md:w-1/3">
          {imageSrc ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-full items-center justify-center"
            >
              <Image
                src={imageSrc}
                alt={`Project for ${title}`}
                className="h-full w-full rounded-sm object-contain"
                width={500}
                height={300}
              />
            </Link>
          ) : (
            <span className="text-sm text-gray-500 sm:text-base">
              Project Image
            </span>
          )}
        </div>

        <div className="flex-1">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
          >
            <h3 className="mb-2 text-xl font-bold sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl">
              {title}
            </h3>
          </Link>

          {techstack && techstack.length > 0 && (
            <div className="mb-4 flex items-center space-x-2">
              {techstack.map((iconPath, iconIndex) => (
                <Image
                  key={iconIndex}
                  src={iconPath}
                  alt="Tech Stack Icon"
                  className="h-5 w-5 object-contain"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          )}

          <p className="text-sm leading-relaxed text-white/70 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
