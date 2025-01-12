import { getClassNameBlockId } from "potion-core/helpers";
import React, { FC } from "react";
import { CodeClient } from "./CodeClient";
import "./styles.css";
import { CodeBlockProps } from "../../../../types/blocks-types";

export const Code: FC<CodeBlockProps> = ({ blockObject }) => {
  const code = blockObject.code.rich_text
    .map((richText) => richText.plain_text)
    .join("");
  const language = blockObject.code.language.toLowerCase();

  return (
    <div className={`ptn-blk-blocks-code ${getClassNameBlockId(blockObject)}`}>
      <div className="ptn-blk-blocks-code-container">
        <CodeClient code={code} language={language} />
      </div>
    </div>
  );
};
