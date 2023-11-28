'use client';

// import { CardProject } from '@/components/molecules/CardProject';
import { PageHeader } from '@/components/organisms';
import { useTranslate } from '@/contexts/AppTranslateContext';
import { projects } from '@/data';
import Image from 'next/image';
import { useState } from 'react';

import { GithubLogo } from '@phosphor-icons/react';

export default function Projects() {
  const { t } = useTranslate('projects');

  const [showFullText, setShowFullText] = useState(true);

  const toggleShowFullText = () => setShowFullText((prev) => !prev);

  return (
    <div className="container md:mt-40 mt-32 w-full min-h-[75vh] flex flex-col justify-start">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                className="absolute inset-0 overflow-hidden rounded-lg"
                src={project.thumbnail}
                alt={project.title}
                height={556}
                width={556}
              />
              <div className="flex flex-col items-start justify-end transition-opacity p-6 absolute inset-0 gap-4 bg-gradient-to-t from-zinc-950 ">
                <h2 className="text-zinc-50 font-inter md:text-2xl">
                  {project.title}
                </h2>
                <p
                  onClick={toggleShowFullText}
                  className={`text-xs md:text-base font-inter text-zinc-100 md:max-w-[80%] text-ellipsis ${
                    showFullText && 'line-clamp-2 transition'
                  }`}
                >
                  {project.subtitle}
                </p>

                <a
                  className="font-bold text-zinc-100 underline font-inter text-sm md:text-base"
                  href={project.linkDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver projeto
                </a>

                <a
                  className="absolute top-3 right-3 bg-zinc-50 p-2 rounded-full"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  title="Repositório"
                >
                  <GithubLogo size={24} className="text-zinc-950" />
                </a>

                {project.stacks && (
                  <div className="flex flex-wrap gap-2 absolute top-3 left-3 max-w-[75%]">
                    {project.stacks.map((stack) => {
                      return (
                        <div
                          style={{ width: 'max-content' }}
                          className={`font-inter backdrop-blur-lg px-2 py-1 text-center ${stack.color} bg-opacity-20 text-zinc-50 text-xs rounded-full font-bold`}
                          key={stack.name}
                        >
                          {stack.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
