import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";
import './styles.css';

interface UnderlineProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Underline: FC<UnderlineProps> = ({ richText, children }) => {
  if (richText.annotations.underline) {
    return <u className="ptn-blk-annotations-underline">{children}</u>;
  }
  return <>{children}</>;
};