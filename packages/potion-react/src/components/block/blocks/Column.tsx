import { getClassNameBlockId } from "potion-core";
import { FC } from "react";
import { ColumnBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../common/RenderBlock";
export const Column: FC<ColumnBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  return (
    <div
      className={`ptn-blk-blocks-column ${getClassNameBlockId(blockObject)}`}
    >
      {blockObject.Children && (
        <RenderBlock
          blockObjects={blockObject.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </div>
  );
};
