import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              The Digital <br /> Da Vinci
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">A Modern Renaissance Artisan</p>
            <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                    I’m a Civil Engineering graduate turned 3D Visualizer, passionate about transforming ideas into immersive digital experiences. With advanced skills in tools like SketchUp and D5 Render, I specialize in architectural and interior visualization that merges technical precision with visual storytelling.
                </p>
                <p>
                    Through the Digital DaVinci Lab, I go beyond 3D visualization—exploring the intersection of design, code, and community. From creating interactive, community-driven web apps to experimenting with game development through "vibe coding", my work reflects a commitment to blending creativity with technology to solve real-world problems and inspire innovation.
                </p>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-0">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="The Digital Da Vinci"
              layout="fill"
              objectFit="cover"
              className="grayscale"
              data-ai-hint="artist portrait"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
