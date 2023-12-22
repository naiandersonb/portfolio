import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <h1 className="font-manrope md:block hidden text-zinc-50 font-bold">
        Naianderson Bruno
      </h1>
      <h1 className="font-manrope md:hidden block text-zinc-50 font-bold text-2xl">
        NB
      </h1>
    </Link>
  );
}
