interface Project {
  title: string;
  subtitle: string;
  linkDemo: string;
  repo: string;
  stacks?: string[];
  thumbnail?: string;
}
export const projects: Project[] = [
  {
    title: 'projeto 01',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    stacks: ['react js', 'styled components', 'node js'],
    thumbnail: 'project-base-img.svg'
  },
  {
    title: 'projeto 02',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    stacks: ['react js', 'styled components', 'node js'],
    thumbnail: 'project-base-img.svg'
  },
  {
    title: 'projeto 03',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    stacks: ['react js', 'styled components', 'node js'],
    thumbnail: 'project-base-img.svg'
  },
  {
    title: 'projeto 04',
    subtitle:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem officia ullam odit, expedita, exercitationem blanditiis in minus ab ipsum, voluptas laudantium nihil. Ex impedit commodi sint exercitationem, magni minima.',
    repo: 'http://github.com/teste/teste',
    linkDemo: 'https://dribbble.com/plainthingstudio',
    thumbnail: 'project-base-img.svg'
  }
];
