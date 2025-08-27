import { snakeToKebab } from "potion-core";
import type { FC } from "react";
import type { ColorProps } from "../../../types";

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
