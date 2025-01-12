import type { RichTextItemResponse } from "potion-core/notion";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import "./styles.css";

export type AnchorProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Anchor: FC<AnchorProps> = ({ richText, children }) => {
  if (richText.href && !(richText.type === "mention")) {
    return (
      <a href={richText.href} className="ptn-blk-annotations-anchor-link">
        {children}
      </a>
    );
  }

  return <>{children}</>;
};
