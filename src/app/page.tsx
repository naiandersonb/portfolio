'use client';

import { Loading } from '@/components/molecules';
import { MainBanner } from '@/components/organisms';
import { useStore } from '@/zustand-store';
import { useEffect } from 'react';

export default function Home() {
  const { isLoading, load } = useStore((state) => {
    return { isLoading: state.isLoading, load: state.load };
  });

  useEffect(() => {
    load('naiandersonb');
  }, [load]);

  if (isLoading) return <Loading />;

  return <MainBanner />;
}
