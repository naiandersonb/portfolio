import { Text } from '@/components/atoms';

export function MainBanner() {
  return (
    <main className="w-full h-[80vh] flex items-center justify-center flex-col gap-8">
      <img
        className="w-[130px] h-[130px] rounded-full"
        src="https://avatars.githubusercontent.com/u/72632956?v=4"
        alt=""
      />

      <h1 className="font-bold max-w-[1000px] dark:text-zinc-50 text-zinc-950 font-inter text-center text-6xl">
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
      </section>
    </main>
  );
}
