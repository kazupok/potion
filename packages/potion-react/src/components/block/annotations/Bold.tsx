import type { RichTextItemResponse } from "potion-core";
import type { FC, PropsWithChildren } from "react";

export type BoldProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Bold: FC<BoldProps> = ({ richText, children }) => {
  if (richText.annotations.bold) {
    return <b className="ptn-blk-annotations-bold">{children}</b>;
  }

  return <>{children}</>;
};
