import { getClassNameBlockId } from "potion-core/helpers";
import type { ColumnBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";

export const Column: ColumnBlockProps = ({ block, blockComponentMap }) => {
  return (
    <div className={`column ${getClassNameBlockId(block)}`}>
      {block.Children && (
        <RenderBlock
          blocks={block.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </div>
  );
};
