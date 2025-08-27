import { getClassNameBlockId } from "potion-core";
import { snakeToKebab } from "potion-core";
import type { FC } from "react";
import type { QuoteBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../common/RenderBlock";
export const Quote: FC<QuoteBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const { annotations } = blockComponentMap;
  return (
    <blockquote
      className={`ptn-blk-blocks-quote ${getClassNameBlockId(blockObject)} ${snakeToKebab(blockObject.quote.color)}`}
    >
      {blockObject.quote.rich_text.map(
        (richText, index) =>
          annotations.rich_text && (
            <annotations.rich_text
              key={index}
              richText={richText}
              blockComponentMap={blockComponentMap}
            />
          ),
      )}
      {blockObject.Children && (
        <RenderBlock
          blockObjects={blockObject.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </blockquote>
  );
};
