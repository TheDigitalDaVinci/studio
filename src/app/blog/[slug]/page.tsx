import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint="technology blog"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed space-y-6">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
