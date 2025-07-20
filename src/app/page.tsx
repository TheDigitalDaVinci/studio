import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-4 text-foreground">
          Artistry in the Digital Age.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Welcome to the workshop of a modern renaissance artisan. I am The Digital Da Vinci, and I blend timeless design principles with cutting-edge technology to craft unique digital experiences.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all duration-300 group">
          <Link href="/portfolio">
            Explore My Portfolio <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>

      <section className="mt-20 md:mt-32">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-foreground">Featured Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/portfolio#${project.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border bg-card/80 backdrop-blur-sm hover:border-primary/50">
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
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <CardTitle className="text-2xl font-headline text-foreground">{project.title}</CardTitle>
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
