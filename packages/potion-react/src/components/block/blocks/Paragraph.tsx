import { getClassNameBlockId } from "potion-core";
import { snakeToKebab } from "potion-core";
import { FC } from "react";
import type { ParagraphBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../common/RenderBlock";

export const Paragraph: FC<ParagraphBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const { annotations } = blockComponentMap;

  return (
    <p
      className={`ptn-blk-blocks-paragraph ${getClassNameBlockId(blockObject)} ${snakeToKebab(blockObject.paragraph.color)}`}
    >
      {blockObject.paragraph.rich_text.length ? (
        blockObject.paragraph.rich_text.map(
          (richText, index) =>
            annotations.rich_text && (
              <annotations.rich_text
                key={index}
                richText={richText}
                blockComponentMap={blockComponentMap}
              />
            ),
        )
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
