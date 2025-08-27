import { getClassNameBlockId } from "potion-core";
import type { FC } from "react";
import type { ToggleBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../common/RenderBlock";

export const Toggle: FC<ToggleBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const { annotations } = blockComponentMap;

  return (
    <details
      className={`ptn-blk-blocks-toggle ${getClassNameBlockId(blockObject)}`}
    >
      <summary className="ptn-blk-blocks-toggle-summary">
        {blockObject.toggle.rich_text.map(
          (richText, index) =>
            annotations.rich_text && (
              <annotations.rich_text
                key={index}
                richText={richText}
                blockComponentMap={blockComponentMap}
              />
            ),
        )}
      </summary>
      <div className="ptn-blk-blocks-toggle-content">
        {blockObject.Children && (
          <RenderBlock
            blockObjects={blockObject.Children}
            blockComponentMap={blockComponentMap}
          />
        )}
      </div>
    </details>
  );
};
