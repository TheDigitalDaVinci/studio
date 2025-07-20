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

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
}
