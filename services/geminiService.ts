import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateArchitecturalResponse = async (
  inquiry: string
): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are a professional, polite, and knowledgeable senior architect consultant for an architecture firm named "Archilog".
              The user is asking a question via the website inquiry form.
              Your goal is to provide a brief, helpful, and professional preliminary answer or acknowledgement.
              If the question is about architectural costs, timeline, or feasibility, explain generally but suggest a formal consultation.
              Keep the tone warm, professional (Korean language), and sophisticated.
              
              User Inquiry: "${inquiry}"
              
              Answer (in Korean, approx 3-4 sentences):`
            }
          ]
        }
      ],
    });

    return response.text || "죄송합니다. 현재 AI 응답 시스템을 이용할 수 없습니다. 담당자가 곧 연락드리겠습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "시스템 오류가 발생했습니다. 잠시 후 다시 시도해주시거나 전화로 문의 부탁드립니다.";
  }
};