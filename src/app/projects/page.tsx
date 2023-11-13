'use client';

import { Text } from '@/components/atoms';
import { useTranslate } from '@/contexts/AppTranslateContext';
import { projects } from '@/data';
import Image from 'next/image';

export default function Projects() {
  const { t } = useTranslate('projects');

  return (
    <div className="container md:mt-40 mt-32 w-full min-h-[75vh] flex flex-col justify-start">
      <h1 className="font-bold dark:text-zinc-50 text-zinc-950 font-inter md:text-2xl sm:text-3xl text-2xl">
        {t('title')}
      </h1>
      <Text className="mt-4 font-inter dark:text-zinc-400 text-zinc-600 md:w-[60%] w-full">
        {t('subtitle')}
      </Text>

      <div className=" w-full mt-16 flex flex-col md:gap-5 gap-3">
        {projects.map((project, index) => {
          const reverse = index % 2 === 0;
          return (
            <div
              key={project.title}
              className="grid md:grid-cols-2 grid-cols-1 gap-12"
            >
              <div
                className={`flex flex-col gap-8 justify-center md:order-${
                  reverse ? '1' : '2'
                }`}
              >
                <h2 className="dark:text-zinc-50 text-zinc-950 font-inter md:text-2xl">
                  {project.title}
                </h2>

                <Text className="font-inter dark:text-zinc-400 text-zinc-600 max-w-[80%]">
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

              <div
                className={`order-${
                  reverse ? '2' : '1'
                } rounded-lg overflow-hidden`}
              >
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
        })}
      </div>
    </div>
  );
}
