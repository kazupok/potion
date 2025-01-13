import type { RichTextItemResponse } from "potion-core";
import type { FC, PropsWithChildren } from "react";

export type UnderlineProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Underline: FC<UnderlineProps> = ({ richText, children }) => {
  if (richText.annotations.underline) {
    return <u className="ptn-blk-annotations-underline">{children}</u>;
  }
  return <>{children}</>;
};
