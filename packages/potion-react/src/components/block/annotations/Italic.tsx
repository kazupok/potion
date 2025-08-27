import type { FC } from "react";
import type { ItalicProps } from "../../../types";

export const Italic: FC<ItalicProps> = ({ richText, children }) => {
  if (richText.annotations.italic) {
    return <i className="ptn-blk-annotations-italic">{children}</i>;
  }

  return <>{children}</>;
};
