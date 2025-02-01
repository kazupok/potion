import type { FC } from "react";
import { AnchorProps } from "../../../types";

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
