import { RichTextItemResponse } from "potion-core";
import type { FC, PropsWithChildren } from "react";

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
