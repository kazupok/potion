import { getClassNameBlockId } from "potion-core";
import { snakeToKebab } from "potion-core";
import { FC } from "react";
import type { QuoteBlockProps } from "../../../types/blocks-types";
import { RichText } from "../annotations";
import { RenderBlock } from "../common/RenderBlock";
export const Quote: FC<QuoteBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  return (
    <blockquote
      className={`ptn-blk-blocks-quote ${getClassNameBlockId(blockObject)} ${snakeToKebab(blockObject.quote.color)}`}
    >
      {blockObject.quote.rich_text.map((richText, index) => (
        <RichText key={index} richText={richText} />
      ))}
      {blockObject.Children && (
        <RenderBlock
          blockObjects={blockObject.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </blockquote>
  );
};
