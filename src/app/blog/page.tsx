import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter">Insights & Tutorials</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Exploring the intersection of art, code, and "vibe."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="technology abstract"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </p>
                <CardTitle className="font-headline text-2xl">{post.title}</CardTitle>
                <CardDescription className="mt-2">{post.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
