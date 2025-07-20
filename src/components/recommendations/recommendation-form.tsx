'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ProjectRecommendationOutput } from '@/ai/flows/project-recommendation';
import { getProjectRecommendations } from '@/actions/get-recommendations';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Loader2, Heart } from 'lucide-react';
import { projects } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const formSchema = z.object({
  preferences: z.string().min(20, {
    message: 'Please describe your preferences in at least 20 characters.',
  }),
});

export function RecommendationForm() {
  const [recommendations, setRecommendations] = useState<ProjectRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferences: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations(null);
    const result = await getProjectRecommendations({ designPreferences: values.preferences });
    setRecommendations(result);
    setIsLoading(false);
  }

  const recommendedProjectDetails = recommendations?.recommendedProjects
    .map(name => projects.find(p => p.title.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(p.title.toLowerCase())))
    .filter(Boolean);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Describe Your Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      For example: "I love minimalist design, futuristic interfaces, and games with a strong narrative." or "I'm interested in sustainable architecture and photorealistic rendering."
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me what you like..."
                        className="min-h-[120px] text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Curating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Get Recommendations
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {recommendations && (
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Heart className="text-accent" />
              Here's What I Recommend
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground italic">{recommendations.reasoning}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedProjectDetails?.map(project =>
                project ? (
                   <Link key={project.id} href={`/portfolio#${project.slug}`} className="group">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="aspect-video overflow-hidden">
                        <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-full object-cover transition-transform group-hover:scale-105" data-ai-hint={`${project.category} design`}/>
                      </div>
                      <div className="p-4">
                        <p className="font-headline text-lg font-semibold">{project.title}</p>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    </Card>
                   </Link>
                ) : null
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
