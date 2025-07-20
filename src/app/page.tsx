import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-primary">
          Artistry in the Digital Age.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Welcome to the workshop of a modern renaissance artisan. I am The Digital Da Vinci, and I blend timeless design principles with cutting-edge technology to craft unique digital experiences, from immersive games to photorealistic visualizations.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/portfolio">
            Explore My Portfolio <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      <section className="mt-20 md:mt-32">
        <h2 className="font-headline text-4xl font-bold text-center mb-12">Featured Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/portfolio#${project.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
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
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
