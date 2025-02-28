import "dotenv/config";
import * as agents from "@graphai/agents";
import { GraphData, GraphAI } from "graphai";
import deepseekAgent from "./deepseek_agent";

const graph_data: GraphData = {
  version: 0.6,
  nodes: {
    messages: {
      value: [
        {
          role: "system",
          content: "You are a helpful assistant. Please answer in Japanese",
        },
      ],
    },
    userInput: {
      // Receives an input from the user.
      agent: "textInputAgent",
      params: {
        message: "prompt:",
      },
    },
    deepseek: {
      // The DeepSeek agent.
      agent: "deepseekAgent",
      params: {
        apiKey: process.env.DEEPSEEK_API_KEY,
        model: "deepseek-chat", // DeepSeek-V3
        stream: true,
      },
      inputs: {
        prompt: ":userInput.text",
        messages: ":messages",
      },
      filterParams: {
        streamTokenCallback: (token: string) => {
          console.log(token);
        },
      },
      console: {
        after: true,
      },
    },
    output: {
      agent: "stringTemplateAgent",
      inputs: {
        text: "Answer:${:deepseek.text}",
      },
      console: {
        after: true,
      },
    },
  },
};

export const main = async () => {
  const graphAI = new GraphAI(graph_data, {
    ...agents,
    deepseekAgent,
  });

  await graphAI.run();
};

if (process.argv[1] === __filename) {
  main();
}
