import type { RichTextItemResponse } from "potion-core";
import type { FC, PropsWithChildren } from "react";

export type CodeProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Code: FC<CodeProps> = ({ richText, children }) => {
  if (richText.annotations.code) {
    return <code className="ptn-blk-annotations-code">{children}</code>;
  }
  return <>{children}</>;
};
