interface Stack {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  subtitle: string;
  linkDemo: string;
  repo: string;
  stacks?: Stack[];
  thumbnail: string;
}
