'use server';

import { getProjectRecommendations as getProjectRecommendationsFlow, ProjectRecommendationInput, ProjectRecommendationOutput } from "@/ai/flows/project-recommendation";

export async function getProjectRecommendations(input: ProjectRecommendationInput): Promise<ProjectRecommendationOutput> {
  try {
    const recommendations = await getProjectRecommendationsFlow(input);
    return recommendations;
  } catch (error) {
    console.error("Error getting project recommendations:", error);
    // You can re-throw the error or return a custom error object
    // For simplicity, we'll return a structured error response
    return {
        recommendedProjects: [],
        reasoning: "Sorry, I was unable to generate recommendations at this time. Please try again later."
    };
  }
}
