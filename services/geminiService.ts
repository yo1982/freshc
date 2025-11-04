
import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from '../types';

// Assume process.env.API_KEY is set in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might show a more user-friendly error
  // For this context, we'll log it and the app will show an error state
  console.error("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const recipeSchema = {
  type: Type.OBJECT,
  properties: {
    recipeName: {
      type: Type.STRING,
      description: "The name of the recipe.",
    },
    description: {
      type: Type.STRING,
      description: "A brief, appealing description of the dish.",
    },
    ingredients: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "A list of ingredients with quantities.",
      },
      description: "All ingredients needed for the recipe.",
    },
    instructions: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "A step in the cooking instructions.",
      },
      description: "Step-by-step instructions to prepare the dish.",
    },
  },
  required: ["recipeName", "description", "ingredients", "instructions"],
};

export const suggestRecipe = async (ingredients: string[]): Promise<Recipe> => {
  if (!API_KEY) {
    throw new Error("API key is not configured.");
  }

  const prompt = `Suggest a simple and delicious recipe using the following ingredients: ${ingredients.join(', ')}. The recipe should be easy for a home cook.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recipeSchema,
      },
    });

    const jsonText = response.text.trim();
    const recipeData = JSON.parse(jsonText);
    
    // Basic validation to ensure the response matches the expected structure
    if (
      !recipeData.recipeName ||
      !recipeData.description ||
      !Array.isArray(recipeData.ingredients) ||
      !Array.isArray(recipeData.instructions)
    ) {
      throw new Error("Received malformed recipe data from AI.");
    }
    
    return recipeData as Recipe;

  } catch (error) {
    console.error("Error generating recipe with Gemini:", error);
    throw new Error("Failed to generate a recipe. The AI may be busy, please try again later.");
  }
};
