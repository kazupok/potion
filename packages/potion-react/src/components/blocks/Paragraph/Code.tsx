import type { RichTextItemResponse } from "potion-core/notion";
import type { FC, PropsWithChildren } from "react";

interface CodeProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Code: FC<CodeProps> = ({ richText, children }) => {
  if (richText.annotations.code) {
    return <code className="p-1 text-[#eb5757]">{children}</code>;
  }
  return <>{children}</>;
};
