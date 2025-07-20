import Link from 'next/link';
import Image from 'next/image';
import type { Project, Course } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type FeaturedItem = (Project & { type: 'project' }) | (Course & { type: 'course' });

export function FeaturedItemCard({ item }: { item: FeaturedItem }) {
  const isProject = item.type === 'project';
  const href = isProject ? `/portfolio#${item.slug}` : `/courses/${item.slug}`;
  const badgeText = isProject ? item.category : 'Masterclass';
  const dataAiHint = isProject ? `${item.category} design` : 'digital art abstract';

  return (
    <Link href={href} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border bg-card/80 backdrop-blur-sm hover:border-primary/50">
        <CardHeader className="p-0">
          <div className="aspect-video overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={dataAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-2">{badgeText}</Badge>
          <CardTitle className="text-2xl font-headline text-foreground">{item.title}</CardTitle>
          <p className="text-muted-foreground mt-2 line-clamp-2">{item.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
