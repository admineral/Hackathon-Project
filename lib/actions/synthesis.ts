"use server";
import OpenAI from "openai";

// Define a union type for complexity levels
export type ComplexityLevel = 'concise' | 'easy' | 'normal' | 'very detailed';

// Function to generate a keyword description
export async function generateKeywordDescription() {
  return "This is a keyword description";
}

// Function to provide a further explanation of a highlight
export async function explainHighlightFurther() {
  return "This is a further explanation";
}

// Function to ask a question on a highlight
export async function askQuestionOnHighlight(question: string) {
  return `You asked: ${question}. This is my answer.`;
}

// Function to get synthesis by complexity level
export async function getSynthesisByComplexity(
  clusterId: string,
  complexityLevel: ComplexityLevel, // Use the defined union type here
  synthesis: string,
  currentSynthesis: string
) {
  // Return current synthesis if it's not the placeholder
  if (currentSynthesis !== "...") {
    return { level: complexityLevel, text: currentSynthesis };
  }

  // Handle the 'normal' complexity level as a special case
  if (complexityLevel == "normal") {
    return { level: "normal", text: synthesis };
  }

  // Initialize the OpenAI client with the API key
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Log to console
  console.log("ran here");

  // Create a chat completion request to OpenAI
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Given a news article, make the understanding level ${complexityLevel}`,
      },
      {
        role: "user",
        content: synthesis,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  // Log the chat completion result
  console.log(chatCompletion);

  // Return the text of the first chat completion choice
  return {
    text: chatCompletion.choices[0].message.content,
  };
}
