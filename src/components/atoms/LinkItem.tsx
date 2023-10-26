import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface LinkItemProps extends LinkProps {
  href: string;
  children: ReactNode;
}

export function LinkItem({ href, children, ...rest }: LinkItemProps) {
  return (
    <Link href={href} {...rest}>
      <p className="font-bebas  text-lg">{children}</p>
    </Link>
  );
}
