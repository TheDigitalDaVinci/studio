import { RecommendationForm } from '@/components/recommendations/recommendation-form';
import { Lightbulb } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-block bg-primary/20 p-4 rounded-full mb-4">
            <Lightbulb className="h-10 w-10 text-primary" />
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter">AI Project Curator</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Not sure where to start? Describe your interests, and I'll use AI to recommend the projects you'll love most from my portfolio.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <RecommendationForm />
      </div>
    </div>
  );
}
