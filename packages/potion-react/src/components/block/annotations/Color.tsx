import { RichTextItemResponse, snakeToKebab } from "potion-core";
import type { FC, PropsWithChildren } from "react";

export type ColorProps = PropsWithChildren & {
  richText: RichTextItemResponse;
};

export const Color: FC<ColorProps> = ({ richText, children }) => {
  if (richText.annotations.color && richText.annotations.color !== "default") {
    return (
      <span
        className={`ptn-blk-annotations-color-${snakeToKebab(richText.annotations.color)}`}
      >
        {children}
      </span>
    );
  }

  return <>{children}</>;
};
