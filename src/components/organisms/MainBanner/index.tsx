'use client';

import { ResumeButton, Text } from '@/components/atoms';
import { socialMediaData } from './socialMediaData';

export function MainBanner() {
  return (
    <main className="w-full min-h-[85vh] flex items-center justify-center flex-col gap-8">
      <img
        className="w-[130px] h-[130px] rounded-full"
        src="https://avatars.githubusercontent.com/u/72632956?v=4"
        alt=""
      />

      <h1 className="font-bold max-w-[1000px] dark:text-zinc-50 text-zinc-950 font-inter text-center md:text-6xl sm:text-3xl text-2xl">
        Naianderson Bruno - Desenvolvedor front-end.
      </h1>

      <section className="max-w-[600px] text-center flex flex-col gap-6">
        <Text>
          Atualmente sou Desenvolvedor Front-end pleno na{' '}
          <a
            className="font-bold underline dark:text-zinc-50 text-zinc-950"
            href="https://site.themembers.com.br"
            target="_blank"
            rel="noreferrer"
          >
            TheMembers
          </a>
          . Natural de Caxias - MA, Brasil.
        </Text>

        <Text>
          Iniciei minha jornada no mundo do desenvolvimento em 2020 e desde
          então sigo me dedicando a melhorar cada dia, sempre focado em
          qualidade e performance para entregar experiências únicas na web.
        </Text>

        <div className="flex flex-row justify-center gap-4 dark:text-zinc-500 text-zinc-500">
          {socialMediaData.map((socialMediaItem) => {
            return (
              <a
                key={socialMediaItem.name}
                href={socialMediaItem.href}
                target="_blank"
                rel="noreferrer"
              >
                <socialMediaItem.icon size={32} />
              </a>
            );
          })}
        </div>
        <div className="flex flex-row justify-center mt-6">
          <ResumeButton />
        </div>
      </section>
    </main>
  );
}
