import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

interface DropdownItemProps {
  children: ReactNode;
}

export function DropdownItem() {
  return (
    <DropdownMenu.Item className="font-inter cursor-pointer hover:bg-zinc-300 w-full px-3 py-2 border-none">
      Português
    </DropdownMenu.Item>
  );
}
