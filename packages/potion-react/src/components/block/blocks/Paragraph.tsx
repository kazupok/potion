import { getClassNameBlockId } from "potion-core";
import { snakeToKebab } from "potion-core";
import { FC } from "react";
import type { ParagraphBlockProps } from "../../../types/blocks-types";
import { RichText } from "../annotations";
import { RenderBlock } from "../common/RenderBlock";

export const Paragraph: FC<ParagraphBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  return (
    <p
      className={`ptn-blk-blocks-paragraph ${getClassNameBlockId(blockObject)} ${snakeToKebab(blockObject.paragraph.color)}`}
    >
      {blockObject.paragraph.rich_text.length ? (
        blockObject.paragraph.rich_text.map((richText, index) => (
          <RichText key={index} richText={richText} />
        ))
      ) : (
        <br />
      )}
      {blockObject.Children && (
        <RenderBlock
          blockObjects={blockObject.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </p>
  );
};
