import { getClassNameBlockId } from "potion-core/helpers";
import React, { FC } from "react";
import { ColumnListBlockProps } from "../../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";

export const ColumnList: FC<ColumnListBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  return (
    <div
      className={`ptn-blk-blocks-column-list ${getClassNameBlockId(blockObject)}`}
    >
      <RenderBlock
        blockObjects={blockObject.ColumnList}
        blockComponentMap={blockComponentMap}
      />
    </div>
  );
};
