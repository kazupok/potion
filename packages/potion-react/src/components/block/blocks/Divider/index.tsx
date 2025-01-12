import { getClassNameBlockId } from "potion-core/helpers";
import React, { FC } from "react";
import "./styles.css";
import { DividerBlockProps } from "../../../../types/blocks-types";

export const Divider: FC<DividerBlockProps> = ({ blockObject }) => {
  return (
    <hr
      className={`ptn-blk-blocks-divider ${getClassNameBlockId(blockObject)}`}
    />
  );
};
