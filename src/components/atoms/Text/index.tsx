'use client';

import { classNames } from '@/utils';
import { HtmlHTMLAttributes, ReactNode } from 'react';

interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
export function Text({ children, ...rest }: TextProps) {
  return (
    <p
      className={classNames(
        'font-inter dark:text-zinc-400 text-zinc-600',
        rest.className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
