'use client';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ subtitle, title }: PageHeaderProps) {
  return (
    <header>
      <h1 className="font-bold dark:text-zinc-50 text-zinc-950 font-inter md:text-2xl sm:text-3xl text-2xl">
        {title}
      </h1>
      <p className="mt-4 font-inter dark:text-zinc-400 text-zinc-600 md:w-[60%] w-full">
        {subtitle}
      </p>
    </header>
  );
}
