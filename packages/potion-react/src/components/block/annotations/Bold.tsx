import type { FC } from "react";
import type { BoldProps } from "../../../types";

export const Bold: FC<BoldProps> = ({ richText, children }) => {
  if (richText.annotations.bold) {
    return <b className="ptn-blk-annotations-bold">{children}</b>;
  }

  return <>{children}</>;
};
