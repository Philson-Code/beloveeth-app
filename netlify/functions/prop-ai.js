import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 455, body: "Method Not Allowed" };
  }

  try {
    const { prompt, userContext } = JSON.parse(event.body || "{}");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `You are Prop, an elite AI real estate intelligence concierge for Beloveeth Realty in Nigeria. 
    Focus on market intelligence, strategic property acquisition, and value projection. 
    Maintain a sophisticated, highly knowledgeable, and sharp tone.`;

    const fullPrompt = `${systemInstruction}\n\nUser Context: ${JSON.stringify(userContext || {})}\n\nUser Query: ${prompt}`;

    const result = await model.generateContent(fullPrompt);
    const responseText = result.response.text();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: responseText }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process AI query", details: error.message }),
    };
  }
}