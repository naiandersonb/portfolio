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
    <Link href={href} {...rest}>
      <p
        className={`font-inter text-3xl md:text-lg ${
          isSelected ? 'text-blue-400' : 'dark:text-zinc-50 text-zinc-900'
        }`}
      >
        {children}
      </p>
    </Link>
  );
}
