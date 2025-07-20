import { notFound } from 'next/navigation';
import Image from 'next/image';
import { courses } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, BarChart, Clock, IndianRupee } from 'lucide-react';

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 shadow-lg border border-border">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              data-ai-hint="online course abstract"
            />
          </div>
          <div className="prose prose-lg prose-invert max-w-none text-foreground/90 leading-relaxed space-y-6">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4 text-foreground">{course.title}</h1>
            <p className="text-muted-foreground">{course.longDescription}</p>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6">
              <h2 className="text-2xl mb-4 font-headline font-semibold text-foreground">Course Details</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <IndianRupee className="h-6 w-6 text-primary" />
                  <span className="font-bold text-2xl text-foreground">{course.price}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <BarChart className="h-5 w-5 text-primary" />
                  <span>Level: {course.level}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Duration: {course.duration}</span>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6">
                Enroll Now
              </Button>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6 mt-8">
              <h3 className="text-xl mb-4 font-headline font-semibold text-foreground">What You'll Learn</h3>
              <ul className="space-y-3">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
