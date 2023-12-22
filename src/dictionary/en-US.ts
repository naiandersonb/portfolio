import { Dictionary } from './interface';

export const enUS: Dictionary = {
  header: {
    projects: 'Projects',
    content: 'Content'
  },
  home: {
    title: 'Front-end Developer',
    currentRole: 'I am currently a Senior Front-end Developer at',
    currentResidence: 'Born in Caxias - MA, Brazil',
    summary:
      'I started my journey in the world of development in 2020, and since then, I have been dedicated to improving every day, always focusing on quality and performance to deliver unique web experiences.',
    resumeButton: 'View my resume'
  },
  projects: {
    title: 'Exploring my projects',
    subtitle:
      'Welcome to my front-end project playground. Explore a variety of creations that reflect my journey as a developer. Each project tells a unique story, where code meets creativity.'
  }
} as const;
