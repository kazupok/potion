import type { FC } from "react";
import type { UnderlineProps } from "../../../types";

export const Underline: FC<UnderlineProps> = ({ richText, children }) => {
  if (richText.annotations.underline) {
    return <u className="ptn-blk-annotations-underline">{children}</u>;
  }
  return <>{children}</>;
};
