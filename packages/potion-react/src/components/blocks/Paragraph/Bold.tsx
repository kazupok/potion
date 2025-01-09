import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";

interface BoldProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Bold: FC<BoldProps> = ({ richText, children }) => {
  if (richText.annotations.bold) {
    return <b>{children}</b>;
  }

  return <>{children}</>;
};
