import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";

interface UnderlineProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Underline: FC<UnderlineProps> = ({ richText, children }) => {
  if (richText.annotations.underline) {
    return <u>{children}</u>;
  }
  return <>{children}</>;
};
