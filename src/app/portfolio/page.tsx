import { ProjectGallery } from '@/components/portfolio/project-gallery';
import { projects } from '@/lib/data';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
       <div className="absolute top-0 left-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#1f3353_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="text-center mb-12 relative">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">My Creations</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A curated collection of my work. Filter by category to explore my diverse skillset.
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </div>
  );
}
