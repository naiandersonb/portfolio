import Link from 'next/link';

export function Logo() {
  return (
    <Link
      className="dark:bg-zinc-900 bg-zinc-300 w-10 h-10 flex items-center justify-center rounded-full relative z-10"
      href="/"
    >
      ⚡
    </Link>
  );
}
