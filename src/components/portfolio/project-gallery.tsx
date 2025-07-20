'use client';

import { useState } from 'react';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './project-card';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectCategory = 'All' | Project['category'];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeFilter === category ? 'default' : 'outline'}
            onClick={() => setActiveFilter(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
