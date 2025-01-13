import { getClassNameBlockId } from "potion-core";
import { FC } from "react";
import { DividerBlockProps } from "../../../types/blocks-types";

export const Divider: FC<DividerBlockProps> = ({ blockObject }) => {
  return (
    <hr
      className={`ptn-blk-blocks-divider ${getClassNameBlockId(blockObject)}`}
    />
  );
};
