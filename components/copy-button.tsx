"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ value, className = "" }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleCopy();
      }}
      className={`inline-flex shrink-0 items-center justify-center rounded transition hover:text-ink ${
        copied ? "text-route" : "text-muted-dark"
      } ${className}`}
      aria-label={copied ? "Copied" : "Copy model ID"}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
