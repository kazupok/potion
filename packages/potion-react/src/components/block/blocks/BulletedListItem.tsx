import { getClassNameBlockId, snakeToKebab } from "potion-core";
import { FC, ReactNode } from "react";
import { BulletedListItemBlockProps } from "../../../types/blocks-types";
import { RichText } from "../annotations";
import { RenderBlock } from "../common/RenderBlock";

const listStyles = [
  "ptn-blk-blocks-bulleted",
  "ptn-blk-blocks-bulleted--circle",
  "ptn-blk-blocks-bulleted--square",
];
const listLength = listStyles.length;

const Root: FC<{
  children: ReactNode;
  level: number;
  className?: string;
}> = ({ children, level, className }) => {
  if (level > 1) return <>{children}</>;
  const listStyle = listStyles[0];

  return <ul className={`${listStyle} ${className || ""}`}>{children}</ul>;
};

export const BulletedListItem: FC<BulletedListItemBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const level = blockObject.Level;
  const style = listStyles[level % listLength];

  return (
    <Root level={level} className={getClassNameBlockId(blockObject)}>
      <li
        className={`ptn-blk-blocks-bulleted-item ${snakeToKebab(blockObject.bulleted_list_item.color)}`}
      >
        {blockObject.bulleted_list_item.rich_text.map((richText, index) => (
          <RichText key={index} richText={richText} />
        ))}
      </li>
      {blockObject.has_children && blockObject.Children && (
        <ul className={`ptn-blk-blocks-bulleted-nested ${style}`}>
          <RenderBlock
            blockObjects={blockObject.Children}
            blockComponentMap={blockComponentMap}
          />
        </ul>
      )}
    </Root>
  );
};
