import { ProjectGallery } from '@/components/portfolio/project-gallery';
import { projects } from '@/lib/data';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter">My Creations</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A curated collection of my work. Filter by category to explore my diverse skillset.
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </div>
  );
}
