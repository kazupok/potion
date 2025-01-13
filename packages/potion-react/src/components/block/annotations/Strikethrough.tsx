import type { RichTextItemResponse } from "potion-core";
import type { FC, PropsWithChildren } from "react";

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
