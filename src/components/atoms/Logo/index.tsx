import Link from 'next/link';

export function Logo() {
  return (
    <Link
      className="
        dark:text-zinc-50 text-zinc-950 
        max-w-[11ch] 
        font-bold text-lg
        flex items-center 
        font-manrope justify-center 
        rounded-full relative z-10
      "
      href="/"
    >
      Naianderson Bruno
    </Link>
  );
}
