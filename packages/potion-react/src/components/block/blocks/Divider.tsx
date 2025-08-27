import { getClassNameBlockId } from "potion-core";
import type { FC } from "react";
import type { DividerBlockProps } from "../../../types/blocks-types";

export const Divider: FC<DividerBlockProps> = ({ blockObject }) => {
  return (
    <hr
      className={`ptn-blk-blocks-divider ${getClassNameBlockId(blockObject)}`}
    />
  );
};
