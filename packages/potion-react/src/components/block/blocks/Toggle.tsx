import { getClassNameBlockId } from "potion-core";
import { FC } from "react";
import type { ToggleBlockProps } from "../../../types/blocks-types";
import { RichText } from "../annotations";
import { RenderBlock } from "../common/RenderBlock";

export const Toggle: FC<ToggleBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  return (
    <details
      className={`ptn-blk-blocks-toggle ${getClassNameBlockId(blockObject)}`}
    >
      <summary className="ptn-blk-blocks-toggle-summary">
        {blockObject.toggle.rich_text.map((richText, index) => (
          <RichText key={index} richText={richText} />
        ))}
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
