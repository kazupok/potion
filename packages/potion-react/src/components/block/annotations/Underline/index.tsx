import type { RichTextItemResponse } from "potion-core/notion";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import "./styles.css";

export type UnderlineProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Underline: FC<UnderlineProps> = ({ richText, children }) => {
  if (richText.annotations.underline) {
    return <u className="ptn-blk-annotations-underline">{children}</u>;
  }
  return <>{children}</>;
};
