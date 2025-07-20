import Image from 'next/image';
import type { Project } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="group"
      id={project.slug}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
        <CardHeader className="p-0 relative">
          <div className="aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${project.category} design`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground">{project.category}</Badge>
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
          <p className="text-muted-foreground mt-2">{project.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
