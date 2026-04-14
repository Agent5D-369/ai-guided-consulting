"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type SharePromptProps = {
  prompt: string;
};

export default function SharePrompt({ prompt }: SharePromptProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this prompt:", prompt);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm leading-7 text-slate-300">{prompt}</p>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/8"
        aria-label="Copy share prompt"
      >
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
        {copied ? "Prompt copied" : "Copy share prompt"}
      </button>
    </div>
  );
}
