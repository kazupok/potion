import type { FC } from "react";
import { StrikethroughProps } from "../../../types";

export const Strikethrough: FC<StrikethroughProps> = ({
  richText,
  children,
}) => {
  if (richText.annotations.strikethrough) {
    return <s className="ptn-blk-annotations-strikethrough">{children}</s>;
  }
  return <>{children}</>;
};
