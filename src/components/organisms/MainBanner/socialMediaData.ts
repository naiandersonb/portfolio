import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  Icon
} from '@phosphor-icons/react';

interface SocialMediaData {
  name: string;
  href: string;
  icon: Icon;
}

export const socialMediaData: SocialMediaData[] = [
  {
    name: 'github',
    href: 'https://github.com/naiandersonb',
    icon: GithubLogo
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/naianderson-bruno',
    icon: LinkedinLogo
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/naiandersonbruno_',
    icon: InstagramLogo
  }
];
