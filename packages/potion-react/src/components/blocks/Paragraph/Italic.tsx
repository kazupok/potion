import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";

interface ItalicProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Italic: FC<ItalicProps> = ({ richText, children }) => {
  if (richText.annotations.italic) {
    return <i>{children}</i>;
  }

  return <>{children}</>;
};
