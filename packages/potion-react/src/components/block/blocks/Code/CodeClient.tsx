"use client";

import Prism from "prismjs";
import React, { FC } from "react";
import "prismjs/components/prism-css";
import "prismjs/components/prism-diff";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-go";
import "prismjs/components/prism-hcl";
import "prismjs/components/prism-java";
import "prismjs/components/prism-json";
import "prismjs/components/prism-python";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";

export type CodeClientProps = {
  code: string;
  language: string;
};

export const CodeClient: FC<CodeClientProps> = ({ code, language }) => {
  const grammar =
    Prism.languages[language.toLowerCase()] || Prism.languages.javascript;

  // TODO:
  // if (language === "mermaid") {
  //   mermaid.initialize({ startOnLoad: true, theme: "neutral" });
  //   return (
  //     <pre className="mermaid w-[100px] min-w-full overflow-x-auto whitespace-pre p-8 text-sm leading-5">
  //       {code}
  //     </pre>
  //   );
  // }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      const button = document.querySelector("button.copy");
      if (button) {
        const originalText = (button as HTMLElement).innerText;
        (button as HTMLElement).innerText = "Copied!";
        setTimeout(() => {
          (button as HTMLElement).innerText = originalText;
        }, 3000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-gray-500 text-sm">{language}</span>
        <button
          onClick={handleCopy}
          className="copy block w-16 cursor-pointer rounded border-0 bg-[rgba(227,226,224,0.5)] text-[var(--fg)] leading-5"
        >
          Copy
        </button>
      </div>
      <pre className="block w-[100px] min-w-full overflow-auto overflow-x-auto whitespace-pre px-8 pt-0 pb-8 text-sm leading-5 [&::-webkit-scrollbar-thumb]:bg-[rgb(211,209,203)] [&::-webkit-scrollbar-track]:bg-[rgb(237,236,233)] [&::-webkit-scrollbar]:h-[10px]">
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, grammar, language),
          }}
          className="!bg-[rgb(247,246,243)] rounded-none p-0 text-[var(--fg)]"
        />
      </pre>
    </>
  );
};
