import type { RichTextItemResponse } from "potion-core";
import type { FC, PropsWithChildren } from "react";

export type ItalicProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Italic: FC<ItalicProps> = ({ richText, children }) => {
  if (richText.annotations.italic) {
    return <i className="ptn-blk-annotations-italic">{children}</i>;
  }

  return <>{children}</>;
};
