import { Project } from './interfaces/Project';

const stackColors = {
  REACT_JS: 'bg-blue-400 ',
  STYLED_COMPONENTS: 'bg-yellow-400',
  NODE_JS: 'bg-green-400 '
} as const;

export const projects: Project[] = [
  {
    title: 'projeto 01',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    stacks: [
      { name: 'react js', color: stackColors.REACT_JS },
      { name: 'styled components', color: stackColors.STYLED_COMPONENTS },
      { name: 'node js', color: stackColors.NODE_JS }
    ],
    thumbnail: '/images/cabeca_de_teia.jpg'
  },
  {
    title: 'projeto 02',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    stacks: [
      { name: 'react js', color: stackColors.REACT_JS },
      { name: 'styled components', color: stackColors.STYLED_COMPONENTS },
      { name: 'node js', color: stackColors.NODE_JS }
    ],
    thumbnail: '/images/cacada_selvagem.jpg'
  },
  {
    title: 'projeto 03',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    stacks: [
      { name: 'react js', color: stackColors.REACT_JS },
      { name: 'styled components', color: stackColors.STYLED_COMPONENTS },
      { name: 'node js', color: stackColors.NODE_JS }
    ],
    thumbnail: '/images/limbo.jpg'
  },
  {
    title: 'projeto 04',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    thumbnail: '/images/nebulosa.jpg'
  }
];
