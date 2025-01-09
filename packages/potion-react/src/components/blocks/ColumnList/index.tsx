import { getClassNameBlockId } from "potion-core/helpers";
import type { ColumnListBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";

export const ColumnList: ColumnListBlockProps = ({
  block,
  blockComponentMap,
}) => {
  return (
    <div className={`column-list ${getClassNameBlockId(block)}`}>
      <RenderBlock
        blocks={block.ColumnList}
        blockComponentMap={blockComponentMap}
      />
    </div>
  );
};
