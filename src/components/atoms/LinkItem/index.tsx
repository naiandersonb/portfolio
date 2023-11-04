'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface LinkItemProps extends LinkProps {
  href: string;
  children: ReactNode;
}

export function LinkItem({ href, children, ...rest }: LinkItemProps) {
  const pathname = usePathname();
  const isSelected = pathname === href;

  return (
    <Link
      className={`font-inter text-3xl md:text-base ${
        isSelected
          ? 'text-blue-400'
          : 'dark:text-zinc-400 text-zinc-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-100'
      }`}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
