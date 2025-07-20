import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

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
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                In an age of specialization, I choose to be a polymath. Like the masters of the Renaissance, I believe that art and science are not separate disciplines, but two sides of the same coin of human creativity. My workshop is not filled with marble and canvas, but with pixels, polygons, and lines of code.
              </p>
              <p>
                My journey began with a fascination for the virtual worlds of video games and the impossible architecture seen in films. This led me down a rabbit hole of 3D modeling, game development, and interactive design. I found that the same principles that guide a painter's brush or a sculptor's chisel—composition, light, form, and story—are just as crucial in the digital realm.
              </p>
              <p>
                As "The Digital Da Vinci," my mission is to bridge the gap between technology and artistry. I don't just build apps; I craft experiences. I don't just create models; I breathe life into virtual objects. Each project is an experiment, a synthesis of ideas, and a testament to the endless possibilities of digital creation.
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
