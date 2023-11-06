import { classNames } from '@/utils';
import { HtmlHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className={classNames(
        'dark:bg-zinc-800 bg-zinc-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  dark:hover:bg-zinc-900 hover:bg-zinc-200 ring-zinc-300 dark:focus:ring-zinc-700 dark:text-zinc-50 text-zinc-900 transition-all',
        rest.className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
