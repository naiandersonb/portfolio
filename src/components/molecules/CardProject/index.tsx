'use client';

import { Text } from '@/components/atoms';
import { Project } from '@/interfaces/Project';
import Image from 'next/image';
import { useState } from 'react';

interface CardProjectProps {
  project: Project;
}

export const CardProject = ({ project }: CardProjectProps) => {
  const [showFullText, setShowFullText] = useState(true);

  const toggleShowFullText = () => setShowFullText((prev) => !prev);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-5 md:mb-0 mb-8">
      <div className="flex flex-col md:gap-8 gap-4 justify-center">
        <h2 className="dark:text-zinc-50 text-zinc-950 font-inter md:text-2xl">
          {project.title}
        </h2>

        <Text
          onClick={toggleShowFullText}
          className={`font-inter dark:text-zinc-400 text-zinc-600 md:max-w-[80%] text-ellipsis ${
            showFullText && 'line-clamp-2 transition'
          }`}
        >
          {project.subtitle}
        </Text>

        <a
          className="font-bold dark:text-zinc-300 text-zinc-600 underline font-inter"
          href={project.linkDemo}
          target="_blank"
          rel="noreferrer"
        >
          Ver projeto
        </a>
      </div>

      <div className="rounded-lg overflow-hidden md:order-1 order-[-1]">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            height={548}
            width={548}
          />
        ) : (
          <div className="max-w-[548px] max-h-[548px] w-[100%] h-[548px] bg-red-400 rounded-lg" />
        )}
      </div>
    </div>
  );
};
