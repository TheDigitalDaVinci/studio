export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'Archviz' | 'Product Design' | 'Games' | 'Apps' | 'Interactive Experiences';
  tags: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string;
}
