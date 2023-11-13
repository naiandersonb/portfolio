import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}
export function Root({ children }: RootProps) {
  return <div className={'grid grid-cols-2 gap-4'}>{children}</div>;
}
