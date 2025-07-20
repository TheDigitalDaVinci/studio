'use server';

/**
 * @fileOverview Recommends relevant portfolio projects based on user design preferences.
 *
 * - getProjectRecommendations - A function that recommends projects.
 * - ProjectRecommendationInput - The input type for the getProjectRecommendations function.
 * - ProjectRecommendationOutput - The return type for the getProjectRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectRecommendationInputSchema = z.object({
  designPreferences: z
    .string()
    .describe('The user-submitted design preferences.'),
});
export type ProjectRecommendationInput = z.infer<
  typeof ProjectRecommendationInputSchema
>;

const ProjectRecommendationOutputSchema = z.object({
  recommendedProjects: z
    .array(z.string())
    .describe('The names of recommended projects.'),
  reasoning: z.string().describe('The reasoning behind the recommendations.'),
});
export type ProjectRecommendationOutput = z.infer<
  typeof ProjectRecommendationOutputSchema
>;

export async function getProjectRecommendations(
  input: ProjectRecommendationInput
): Promise<ProjectRecommendationOutput> {
  return projectRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectRecommendationPrompt',
  input: {schema: ProjectRecommendationInputSchema},
  output: {schema: ProjectRecommendationOutputSchema},
  prompt: `You are an expert portfolio curator. A user has provided their design preferences. Based on those preferences, recommend 3 projects from the portfolio that they would be most interested in. Explain the reasoning behind your recommendations.

Design Preferences: {{{designPreferences}}}

Output the project names in a numbered list, and then explain your reasoning in a separate paragraph.
`,
});

const projectRecommendationFlow = ai.defineFlow(
  {
    name: 'projectRecommendationFlow',
    inputSchema: ProjectRecommendationInputSchema,
    outputSchema: ProjectRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
