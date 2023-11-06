'use client';

import { useToggle } from '@/hooks/useToggle';
import Hamburger from 'hamburger-react';
import { ReactNode } from 'react';

interface MobileMenuProps {
  children: ReactNode;
}

export function MobileMenu({ children }: MobileMenuProps) {
  const { isOpen, onToggle } = useToggle();

  return (
    <>
      <button
        onClick={onToggle}
        className=" dark:text-zinc-50 md:hidden block text-zinc-900 relative z-10"
      >
        <Hamburger size={24} />
      </button>

      <div
        className={`fixed h-[100vh] w-[100vw] top-0 ${
          isOpen ? 'right-0' : 'right-[-100vw]'
        } dark:bg-zinc-950 flex flex-col px-8 pt-32 gap-5 transition-all`}
      >
        {children}
      </div>
    </>
  );
}
