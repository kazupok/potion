import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";
import './styles.css';

interface CodeProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Code: FC<CodeProps> = ({ richText, children }) => {
  if (richText.annotations.code) {
    return <code className="ptn-blk-annotations-code">{children}</code>;
  }
  return <>{children}</>;
};