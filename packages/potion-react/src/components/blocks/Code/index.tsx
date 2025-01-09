import { getClassNameBlockId } from "potion-core/helpers";
import type { CodeBlockProps } from "../../../types/blocks-types";
import { CodeClient } from "./CodeClient";
import "./styles.css";

export const Code: CodeBlockProps = ({ block }) => {
  const code = block.code.rich_text
    .map((richText) => richText.plain_text)
    .join("");
  const language = block.code.language.toLowerCase();

  return (
    <div className={`code-block ${getClassNameBlockId(block)}`}>
      <div className="code-container">
        <CodeClient code={code} language={language} />
      </div>
    </div>
  );
};
