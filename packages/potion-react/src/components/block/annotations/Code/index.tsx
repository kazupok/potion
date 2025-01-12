import type { RichTextItemResponse } from "potion-core/notion";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import "./styles.css";

export type CodeProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Code: FC<CodeProps> = ({ richText, children }) => {
  if (richText.annotations.code) {
    return <code className="ptn-blk-annotations-code">{children}</code>;
  }
  return <>{children}</>;
};
