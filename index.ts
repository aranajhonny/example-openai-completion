// `nodes` contain any nodes you add from the graph (dependencies)
// `root` is a reference to this program's root node
// `state` is an object that persists across program updates. Store data here.
import { nodes, root, state } from "membrane";

const AI = nodes.models.one({ id: "gpt-3.5-turbo" });

export async function summarize({ args: { text } }): Promise<string> {
  const prompt = {
    content: `Condense the text in it's original language into a short summary. \nText:${text}\n`,
    role: "user",
  };
  const res = await AI.completeChat({ messages: [prompt] });
  return `Summary: ${res.content}`;
}

export async function grammar({ args: { text } }): Promise<string> {
  const prompt = {
    content: `Explain the grammar of the text. \nText:${text}\n`,
    role: "user",
  };
  const res = await AI.completeChat({ messages: [prompt] });
  return `Grammar: ${res.content}`;
}

export async function explain({ args: { text } }): Promise<string> {
  const prompt = {
    content: `Explain the text. \nText:${text}\n`,
    role: "user",
  };
  const res = await AI.completeChat({ messages: [prompt] });
  return `Explanation: ${res.content}`;
}

export async function sentimentAnalysis({ args: { text } }): Promise<string> {
  const prompt = {
    content: `Analyze the sentiment of the text. determine if it is: positive, negative or neutral. Returns a single word.\nText:${text}\n`,
    role: "user",
  };
  const res = await AI.completeChat({ messages: [prompt] });
  return `Sentiment: ${res.content}`;
}
