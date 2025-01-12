import { getClassNameBlockId } from "potion-core/helpers";
import React, { FC } from "react";
import type { QuoteBlockProps } from "../../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { snakeToKebab } from "potion-core/utils";
import { RichText } from "../../annotations";

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
