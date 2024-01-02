'use client';

import { Text } from '@/components/atoms';
import { socialMediaData } from './socialMediaData';

export function MainBanner() {
  return (
    <main className="w-full md:min-h-[70vh] min-h-[80vh] flex items-center justify-center flex-col gap-8">
      <h1 className="max-w-[11ch] dark:text-zinc-50 text-zinc-950 font-manrope text-center md:text-7xl text-5xl">
        Front-End Development
      </h1>
      <section className="max-w-[700px] text-center flex flex-col gap-6">
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
          .
          <br />
          <br />
          Minha paixão é transformar ideias criativas em experiências
          envolventes utilizando as tecnologias mais atuais do mercado. Com um
          toque de descontração e um compromisso sério com a qualidade, estou
          sempre em busca de desafios que impulsionem meu crescimento
          profissional! 🚀✨
        </Text>
      </section>

      <div className="flex flex-row md:mt-4 mt-12 justify-center gap-2 dark:text-zinc-500 text-zinc-500">
        {socialMediaData.map((socialMediaItem) => {
          return (
            <a
              className="dark:bg-zinc-900 dark:hover:text-zinc-50 hover:text-zinc-950 bg-zinc-50 p-3 rounded-full"
              key={socialMediaItem.name}
              href={socialMediaItem.href}
              target="_blank"
              rel="noreferrer"
            >
              <socialMediaItem.icon size={24} />
            </a>
          );
        })}
      </div>
    </main>
  );
}
