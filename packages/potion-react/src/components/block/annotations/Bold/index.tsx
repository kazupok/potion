import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";
import "./styles.css";

interface BoldProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Bold: FC<BoldProps> = ({ richText, children }) => {
  if (richText.annotations.bold) {
    return <b className="ptn-blk-annotations-bold">{children}</b>;
  }

  return <>{children}</>;
};