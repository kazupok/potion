import type { RichTextItemResponse } from "potion-core/notion";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import "./styles.css";

export type StrikethroughProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Strikethrough: FC<StrikethroughProps> = ({
  richText,
  children,
}) => {
  if (richText.annotations.strikethrough) {
    return <s className="ptn-blk-annotations-strikethrough">{children}</s>;
  }
  return <>{children}</>;
};
