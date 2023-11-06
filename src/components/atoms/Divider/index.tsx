import { classNames } from '@/utils';
import { HtmlHTMLAttributes } from 'react';

type DividerProps = HtmlHTMLAttributes<HTMLDivElement>;

export function Divider({ ...rest }: DividerProps) {
  return (
    <div
      className={classNames('h-[1px] bg-zinc-900 w-full', rest.className)}
      {...rest}
    />
  );
}
