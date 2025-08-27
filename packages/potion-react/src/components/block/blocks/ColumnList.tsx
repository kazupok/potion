import { getClassNameBlockId } from "potion-core";
import type { FC } from "react";
import type { ColumnListBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../common/RenderBlock";
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
