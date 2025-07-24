
import type { Project, Course } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Residence Design',
    slug: 'residence-design',
    description: 'A virtual walkthrough of a modern residence. Click to explore.',
    longDescription: "Explore a fully interactive, real-time architectural visualization of a modern residence. This project allows users to walk through a beautifully rendered home, showcasing advanced lighting, high-fidelity assets, and a seamless user experience for virtual exploration.",
    image: '/residence-design.png',
    category: 'Archviz',
    tags: ['D5 Render', 'Archviz', 'Real-time', 'Virtual Tour'],
    externalUrl: 'https://nixmo4.github.io/Bineesh-s-Residence-Virtual-Walk-Through/',
  },
  {
    id: 3,
    title: 'Stay Tuned',
    slug: 'stay-tuned',
    description: 'New and exciting game projects are currently in development. Check back soon!',
    longDescription: 'I am passionately working on new game development projects that blend interactive storytelling with engaging gameplay. More information will be available soon.',
    image: '/stay-tuned.png',
    category: 'Games',
    tags: ['Unity', 'Game Dev', 'Coming Soon'],
  },
  {
    id: 4,
    title: 'BUS ഉണ്ടോ?',
    slug: 'bus-undo',
    description: 'A real-time bus timing search engine and community-driven update web app.',
    longDescription: 'BUS ഉണ്ടോ? is a web app designed to solve a local problem: finding real-time bus schedules. It functions as both a search engine for bus timings and a platform for users to contribute and update schedule information, making it a community-driven tool.',
    image: '/bus-undo.png',
    category: 'Apps',
    tags: ['Web App', 'Community', 'Real-time', 'Utilities'],
    externalUrl: 'https://busundo.thedigitaldavinci.com/',
  },
  {
    id: 6,
    title: 'Hospital Reception',
    slug: 'hospital-reception',
    description: 'A virtual walkthrough of a modern hospital reception. Click to explore.',
    longDescription: 'This archviz project provides an interactive virtual tour of a hospital reception area. The walkthrough was created to give stakeholders a realistic feel for the space before construction, focusing on patient flow, material finishes, and ambient lighting.',
    image: '/hospital-reception.png',
    category: 'Archviz',
    tags: ['D5 Render', 'Archviz', 'Virtual Tour', 'Healthcare Design'],
    externalUrl: 'https://nixmo4.github.io/SNIMS-Reception/',
  },
  {
    id: 7,
    title: 'Residence Interior Design',
    slug: 'residence-interior-design',
    description: 'An immersive virtual walkthrough of a modern residence interior.',
    longDescription: 'This project showcases a detailed and interactive interior design visualization. Users can navigate through the space in real-time to appreciate the layout, materials, and lighting design of this contemporary home.',
    image: '/residence-interior-design.png',
    category: 'Archviz',
    tags: ['D5 Render', 'Archviz', 'Interior Design', 'Virtual Tour'],
    externalUrl: 'https://nixmo4.github.io/Dr.Nidhin-s-Interior-Design/',
  },
  {
    id: 8,
    title: 'Bedroom Interior Interactive Render',
    slug: 'bedroom-interior-interactive-render',
    description: 'An interactive 360-degree render of a modern bedroom interior.',
    longDescription: "This interactive render allows for a 360-degree view of a bedroom, showcasing different lighting scenarios and material details. It's a demonstration of real-time rendering capabilities for interior spaces.",
    image: '/bedroom-interior-interactive-render.png',
    category: 'Archviz',
    tags: ['360 Render', 'Archviz', 'Interior Design', 'Virtual Tour'],
    externalUrl: 'https://thedigitaldavinci.github.io/Lightingtest-360/',
  },
];

export const courses: Course[] = [
    {
      id: 1,
      title: 'Exterior Rendering Masterclass',
      slug: 'exterior-rendering-masterclass',
      description: 'Master the art of creating stunning, real-time exterior architectural visualizations.',
      longDescription: 'Want to create stunning, realistic exterior renders but don’t know where to start? This crash course will teach you how to bring architectural designs to life with professional-quality rendering. It is ideal for beginners who want to learn exterior rendering fast, designers looking to improve their 3D visualization skills, and anyone interested in creating realistic exterior scenes. This is a hands-on, step-by-step course designed to get you from basic to pro-level rendering in the shortest time possible. No fluff—just practical skills you can apply immediately. The classes are in Malayalam. Ready to transform your exterior renders?',
      image: '/exterior-rendering-masterclass.png',
      price: 1999,
      level: 'Beginner',
      duration: '1+ hours',
      topics: [
        'How to set up a 3D model for the best rendering results using D5 Render',
        'The right lighting and environment settings for a natural look',
        'Choosing realistic materials and textures',
        'Rendering techniques to achieve high-quality results quickly',
        'Post-processing tips to enhance your final render'
      ],
      enrollmentUrl: 'https://rzp.io/rzp/ext-master-class-d5'
    },
    {
      id: 2,
      title: 'Interior Rendering Masterclass',
      slug: 'interior-rendering-masterclass',
      description: 'Learn to create beautiful, interactive 3D interior experiences from scratch.',
      longDescription: 'Unlock the power of photorealistic interior rendering. This course is for developers and artists who want to bring their ideas to life. We will cover the fundamentals of 3D lighting, material properties, and creating stunning interior scenes. You\'ll build several projects, including a modern living room and a cozy bedroom scene.',
      image: '/interior-rendering-masterclass.png',
      price: 2999,
      level: 'Advanced',
      duration: '6 Weeks',
      topics: ['3D Scene Setup', 'Advanced Material Properties', 'Post-processing Effects', 'Lighting Techniques', 'Camera & Composition']
    },
  ];
