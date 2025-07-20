import Image from 'next/image';
import type { Project } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card id={project.slug} className="h-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary group">
          <CardHeader className="p-0">
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
            <CardDescription className="mt-2">{project.description}</CardDescription>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <ScrollArea className="max-h-[80vh]">
          <div className="p-2 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg">
               <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={`${project.category} illustration`}
              />
            </div>
            <div>
              <DialogHeader>
                <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground w-fit">{project.category}</Badge>
                <DialogTitle className="font-headline text-4xl mb-2">{project.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 py-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
                <DialogDescription className="text-base text-foreground/80 py-4">
                  {project.longDescription}
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
