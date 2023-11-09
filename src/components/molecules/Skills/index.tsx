import Image from 'next/image';
import { skills } from './skills';

export function Skills() {
  return (
    <div className="container flex flex-row py-14 items-center justify-center gap-10 flex-wrap">
      {skills.map((skill) => (
        <a
          className="hover:scale-125 dark:opacity-100 opacity-20 hover:opacity-100 transition ease-in-out duration-100"
          href={skill.link}
          key={skill.name}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`skills/${skill.name}.svg`}
            width={40}
            height={40}
            alt={skill.name}
          />
        </a>
      ))}
    </div>
  );
}
