import { ProjectGallery } from '@/components/portfolio/project-gallery';
import { projects } from '@/lib/data';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.15),rgba(255,255,255,0))]"></div>
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">My Creations</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A curated collection of my work. Filter by category to explore my diverse skillset.
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </div>
  );
}
