import { getClassNameBlockId, snakeToKebab } from "potion-core";
import { FC } from "react";
import { CalloutBlockProps } from "../../../types/blocks-types";
import { RichText } from "../annotations";
import { RenderBlock } from "../common/RenderBlock";
export const Callout: FC<CalloutBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  return (
    <div
      className={`ptn-blk-blocks-callout ${getClassNameBlockId(blockObject)} ${snakeToKebab(blockObject.callout.color)}`}
    >
      {blockObject.callout.icon && (
        <div className="ptn-blk-blocks-callout-icon">
          {blockObject.callout.icon.type === "emoji" ? (
            blockObject.callout.icon.emoji
          ) : blockObject.callout.icon.type === "external" ? (
            <img
              src={blockObject.callout.icon.external.url}
              alt="Icon in a callout block"
            />
          ) : blockObject.callout.icon.type === "file" ? (
            <img
              src={blockObject.callout.icon.file.url}
              alt="Icon in a callout block"
            />
          ) : (
            <></>
          )}
        </div>
      )}
      <div className="ptn-blk-blocks-callout-content">
        {blockObject.callout.rich_text.map((richText, index) => (
          <RichText key={index} richText={richText} />
        ))}
        {blockObject.Children && (
          <RenderBlock
            blockObjects={blockObject.Children}
            blockComponentMap={blockComponentMap}
          />
        )}
      </div>
    </div>
  );
};
