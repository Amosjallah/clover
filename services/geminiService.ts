import { GoogleGenAI, Type } from "@google/genai";
import { CreativeConceptResponse } from "../types";

export const generateCreativeConcept = async (userIdea: string): Promise<CreativeConceptResponse | null> => {
  try {
    // Initialize the client strictly inside the function to avoid top-level 'process is not defined' crashes
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user wants to book a creative session (photography, video, or design) or buy custom clothes. 
      They have provided this rough idea: "${userIdea}".
      
      Act as a world-class Creative Director for Clovermade Studio. 
      Expand this rough idea into a polished creative concept.
      
      Return JSON with a catchy title, a mood description, and a list of visual elements.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptTitle: { type: Type.STRING },
            moodDescription: { type: Type.STRING },
            suggestedElements: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["conceptTitle", "moodDescription", "suggestedElements"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as CreativeConceptResponse;
  } catch (error) {
    console.error("Error generating creative concept:", error);
    return null;
  }
};