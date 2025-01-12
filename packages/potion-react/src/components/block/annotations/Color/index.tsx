import type { RichTextItemResponse } from "potion-core/notion";
import { snakeToKebab } from "potion-core/utils";
import type { FC, PropsWithChildren } from "react";
import './styles.css';

interface ColorProps extends PropsWithChildren {
  richText: RichTextItemResponse;
}

export const Color: FC<ColorProps> = ({ richText, children }) => {
  if (richText.annotations.color && richText.annotations.color !== "default") {
    return (
      <span className={`ptn-blk-annotations-color-${snakeToKebab(richText.annotations.color)}`}>
        {children}
      </span>
    );
  }

  return <>{children}</>;
};