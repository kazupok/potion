import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";

interface StrikethroughProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Strikethrough: FC<StrikethroughProps> = ({
  richText,
  children,
}) => {
  if (richText.annotations.strikethrough) {
    return <s>{children}</s>;
  }
  return <>{children}</>;
};
