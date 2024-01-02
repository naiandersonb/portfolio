'use client';

// import { Skills } from '@/components/molecules/Skills';
import { Loading } from '@/components/molecules';
import { MainBanner } from '@/components/organisms';
import { Projects } from '@/components/organisms/Projects';
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

  return (
    <>
      <div className="container mt-24">
        <MainBanner />
        <Projects />
      </div>
      {/* <Skills /> */}
    </>
  );
}
