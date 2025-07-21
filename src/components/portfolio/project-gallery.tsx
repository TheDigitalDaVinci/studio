'use client';

import { useState } from 'react';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './project-card';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
            className="capitalize rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {activeFilter === 'Archviz' && (
        <div className="text-center mb-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-background hover:text-primary border border-transparent hover:border-primary transition-all duration-300 group">
            <Link href="https://nidhinzzx4.myportfolio.com/" target="_blank" rel="noopener noreferrer">
              View Full Archviz Portfolio <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      )}
      
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map(project => (
             <a key={project.id} href={project.externalUrl || `/portfolio#${project.slug}`} target={project.externalUrl ? "_blank" : "_self"} rel="noopener noreferrer" className="group">
                <ProjectCard project={project} />
             </a>
           ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
