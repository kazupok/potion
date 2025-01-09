import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";
interface AnchorProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Anchor: FC<AnchorProps> = ({ richText, children }) => {
  if (richText.href && !(richText.type === "mention")) {
    return (
      <a href={richText.href} className="underline">
        {children}
      </a>
    );
  }

  return <>{children}</>;
};
