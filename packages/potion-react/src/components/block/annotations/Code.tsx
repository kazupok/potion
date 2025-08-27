import type { FC } from "react";
import type { CodeProps } from "../../../types";

export const Code: FC<CodeProps> = ({ richText, children }) => {
  if (richText.annotations.code) {
    return <code className="ptn-blk-annotations-code">{children}</code>;
  }
  return <>{children}</>;
};
