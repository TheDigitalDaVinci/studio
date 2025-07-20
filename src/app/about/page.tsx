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
              The Digital Da Vinci
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">A Modern Renaissance Artisan</p>
            <p className="text-muted-foreground text-lg">
              I am a digital artisan specializing in the fusion of technology and design. From photorealistic architectural visualizations to immersive game worlds and interactive web applications, I bring ideas to life with a blend of technical skill and creative vision.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-headline text-2xl font-semibold">My Expertise</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Architectural & Product Visualization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Game Environment & Asset Creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Interactive Web Experiences (WebGL/Three.js)</span>
                </li>
                 <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>UI/UX Design for Apps & Games</span>
                </li>
              </ul>
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
