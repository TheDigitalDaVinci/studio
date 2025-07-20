import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { projects, courses } from '@/lib/data';
import { FeaturedItemCard } from '@/components/portfolio/featured-item-card';

export default function Home() {
  const featuredArchviz = projects.find(p => p.category === 'Archviz');
  const featuredGame = projects.find(p => p.category === 'Games');
  const featuredApp = projects.find(p => p.category === 'Apps');
  const featuredCourse = courses[0];

  const featuredItems = [
    featuredArchviz && { ...featuredArchviz, type: 'project' as const },
    featuredCourse && { ...featuredCourse, type: 'course' as const },
    featuredApp && { ...featuredApp, type: 'project' as const },
    featuredGame && { ...featuredGame, type: 'project' as const },
  ].filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-4 text-foreground">
          Artistry in the Digital Age.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Welcome to the workshop of a modern renaissance artisan. I am The Digital Da Vinci, and I blend timeless design principles with cutting-edge technology to craft unique digital experiences.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-background hover:text-primary border border-transparent hover:border-primary transition-all duration-300 group">
          <Link href="/portfolio">
            Explore My Portfolio <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>

      <section className="mt-20 md:mt-32">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-foreground">Featured Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
             <FeaturedItemCard key={`${item!.type}-${item!.id}`} item={item!} />
          ))}
        </div>
      </section>
    </div>
  );
}
