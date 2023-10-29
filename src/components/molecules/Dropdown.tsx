'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

interface DropdownProps {
  children: ReactNode;
}

export function Dropdown({ children }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="dark:text-zinc-50 text-zinc-900">
        {children}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dark:bg-zinc-800 bg-zinc-100 border border-zinc-200 rounded-md">
          <DropdownMenu.Item className="font-inter cursor-pointer hover:bg-zinc-300 w-full px-3 py-2 border-none">
            Português
          </DropdownMenu.Item>

          <DropdownMenu.Item className="font-inter cursor-pointer hover:bg-zinc-300 w-full px-3 py-2 border-none">
            Inglês
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
