import { getClassNameBlockId } from "potion-core/helpers";
import React, { FC } from "react";
import type { NumberedListItemBlockProps } from "../../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { snakeToKebab } from "potion-core/utils";
import { RichText } from "../../annotations";

const listStyles = [
  "ptn-blk-blocks-numbered",
  "ptn-blk-blocks-numbered--alpha",
  "ptn-blk-blocks-numbered--roman",
];
const listLength = listStyles.length;

const Root: FC<{
  children: React.ReactNode;
  level: number;
  className?: string;
}> = ({ children, level, className }) => {
  if (level > 1) return <>{children}</>;

  const listStyle = listStyles[0];

  return <ol className={`${listStyle} ${className || ""}`}>{children}</ol>;
};

export const NumberedListItem: FC<NumberedListItemBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const level = blockObject.Level;
  const listStyle = listStyles[level % listLength];

  return (
    <Root level={level} className={getClassNameBlockId(blockObject)}>
      <li
        className={`ptn-blk-blocks-numbered-item ${snakeToKebab(blockObject.numbered_list_item.color)}`}
      >
        {blockObject.numbered_list_item.rich_text.map((richText, index) => (
          <RichText key={index} richText={richText} />
        ))}
      </li>
      {blockObject.has_children && blockObject.Children && (
        <ol className={`ptn-blk-blocks-numbered-nested ${listStyle}`}>
          <RenderBlock
            blockObjects={blockObject.Children}
            blockComponentMap={blockComponentMap}
          />
        </ol>
      )}
    </Root>
  );
};
