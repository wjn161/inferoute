"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CLIPBOARD_FEEDBACK_MS = 2000;
const tabs = ["Python", "cURL", "Node.js"] as const;

function generateCode(lang: (typeof tabs)[number], modelId: string): string {
  switch (lang) {
    case "Python":
      return `import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.inferoute.ai/v1",
    api_key=os.environ.get("INFEROUTE_API_KEY"),
)

try:
    response = client.chat.completions.create(
        model="${modelId}",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Write a haiku about recursion."},
        ],
        max_tokens=512,
        temperature=0.7,
    )

    print(response.choices[0].message.content)
except Exception as e:
    print(f"Error: {e}")`;

    case "cURL":
      return `curl https://api.inferoute.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $INFEROUTE_API_KEY" \\
  -d '{
    "model": "${modelId}",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Write a haiku about recursion."}
    ],
    "max_tokens": 512,
    "temperature": 0.7
  }'`;

    case "Node.js":
      return `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.inferoute.ai/v1",
  apiKey: process.env.INFEROUTE_API_KEY,
});

async function main() {
  try {
    const response = await client.chat.completions.create({
      model: "${modelId}",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Write a haiku about recursion." },
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();`;
  }
}

export function CodeExamples({ modelId }: { modelId: string }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Python");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(generateCode(activeTab, modelId)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), CLIPBOARD_FEEDBACK_MS);
    }).catch((err) => {
      console.error("Copy failed:", err);
    });
  }

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-line">
      <div className="flex items-center justify-between border-b border-line bg-canvas-soft px-4">
        <div role="tablist" className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              tabIndex={activeTab === tab ? 0 : -1}
              id={`tab-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-xs font-medium transition ${
                activeTab === tab
                  ? "border-b-2 border-route text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted transition hover:text-ink"
        >
          {copied ? <Check size={14} className="text-route" /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.toLowerCase()}`}
        id={`panel-${activeTab.toLowerCase()}`}
        className="overflow-x-auto bg-canvas-raised p-5 text-[13px] leading-relaxed"
      >
        <code className="font-mono text-muted">{generateCode(activeTab, modelId)}</code>
      </pre>
    </div>
  );
}
