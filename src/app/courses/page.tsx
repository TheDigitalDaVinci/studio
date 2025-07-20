import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,243,0.15),rgba(255,255,255,0))]"></div>
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">Masterclasses</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Deepen your skills with comprehensive masterclasses from a digital artisan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.slug}`} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border bg-card/80 backdrop-blur-sm hover:border-primary/50">
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
                <CardTitle className="text-2xl text-foreground">{course.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{course.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
