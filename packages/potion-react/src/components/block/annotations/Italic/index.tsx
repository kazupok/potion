import type { RichTextItemResponse } from "potion-core/notion";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import "./styles.css";

export type ItalicProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Italic: FC<ItalicProps> = ({ richText, children }) => {
  if (richText.annotations.italic) {
    return <i className="ptn-blk-annotations-italic">{children}</i>;
  }

  return <>{children}</>;
};
