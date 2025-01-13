"use client";

import Prism from "prismjs";
import { FC } from "react";
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
      <div className={"ptn-blk-code-preview-header"}>
        <span className={"ptn-blk-code-preview-language"}>{language}</span>
        <button
          onClick={handleCopy}
          className={"ptn-blk-code-preview-copy-button"}
        >
          Copy
        </button>
      </div>
      <pre className={"ptn-blk-code-preview-pre"}>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, grammar, language),
          }}
          className={"ptn-blk-code-preview-code"}
        />
      </pre>
    </>
  );
};
