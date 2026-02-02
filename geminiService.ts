
import { GoogleGenAI } from "@google/genai";

export async function getWeddingAdvice(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert wedding photography assistant for 'm2creations'. 
        You help couples plan their wedding photography timeline, choose locations, and understand photography styles (Candid vs. Editorial). 
        You should be warm, professional, and sophisticated. 
        If asked about pricing, encourage them to contact us directly for a bespoke quote based on their specific needs. 
        Keep responses concise and elegant.`,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our assistant is currently resting. Please contact us directly for any inquiries!";
  }
}
