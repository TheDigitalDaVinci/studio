'use client';

import { useState, useMemo } from 'react';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './project-card';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectCategory = 'All' | Project['category'];

const categories: ProjectCategory[] = ['All', 'Archviz', 'Product Design', 'Games', 'Apps', 'Interactive Experiences'];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
