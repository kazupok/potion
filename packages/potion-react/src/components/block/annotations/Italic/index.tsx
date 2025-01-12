import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";
import './styles.css';

interface ItalicProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Italic: FC<ItalicProps> = ({ richText, children }) => {
  if (richText.annotations.italic) {
    return <i className="ptn-blk-annotations-italic">{children}</i>;
  }

  return <>{children}</>;
};