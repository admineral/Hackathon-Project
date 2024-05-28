/*
** ****************************************************************************
** This file defines the API route for handling chat interactions using OpenAI.
** It processes POST requests by extracting messages and synthesis content from
** the request body, then generates a response using OpenAI's GPT model. The
** response is streamed back to the client, providing an interactive chat experience.
** ****************************************************************************
*/

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  // Extract the `messages` and `synthesis` from the body of the request
  const { messages, synthesis } = await req.json();

  // Include a system message to start the conversation that contains the article content
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    stream: true,
    messages: [
      ...messages,
      {
        role: "system",
        content:
          "Here is the article content. Answer the user's question based on the article. Keep your answer under 30 words.\n" +
          synthesis,
      },
    ],
  });

  // Convert the OpenAI response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the text stream for real-time interaction
  return new StreamingTextResponse(stream);
}
