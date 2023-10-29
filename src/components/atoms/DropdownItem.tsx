import { classNames } from '@/utils';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode, HtmlHTMLAttributes } from 'react';

interface DropdownItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function DropdownItem({ children, ...rest }: DropdownItemProps) {
  return (
    <DropdownMenu.Item
      className={classNames(
        'font-inter cursor-pointer hover:bg-zinc-300 w-full px-3 py-2 border-none',
        rest.className
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
}
