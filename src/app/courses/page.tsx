import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#1f3353_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="text-center mb-12 relative">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Masterclasses</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Deepen your skills with comprehensive masterclasses from a digital artisan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.slug}`} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-border/80 hover:border-primary">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="digital art abstract"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                   <Badge variant="secondary">{course.level}</Badge>
                   <p className="text-lg font-semibold text-primary">₹{course.price}</p>
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{course.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
