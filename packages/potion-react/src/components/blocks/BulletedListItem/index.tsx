import "./styles.css";
import { getClassNameBlockId } from "potion-core/helpers";
import { snakeToKebab } from "potion-core/utils";
import type { BulletedListItemBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

const listStyles = [
  "bulleted-list",
  "bulleted-list--circle",
  "bulleted-list--square",
];
const listLength = listStyles.length;

const Root = ({
  children,
  level,
  className,
}: {
  children: React.ReactNode;
  level: number;
  className?: string;
}) => {
  if (level > 1) return <>{children}</>;
  const listStyle = listStyles[0];

  return <ul className={`${listStyle} ${className || ""}`}>{children}</ul>;
};

export const BulletedListItem: BulletedListItemBlockProps = ({
  block,
  blockComponentMap,
}) => {
  const level = block.Level;
  const style = listStyles[level % listLength];

  return (
    <Root level={level} className={getClassNameBlockId(block)}>
      <li
        className={`bulleted-list-item ${snakeToKebab(block.bulleted_list_item.color)}`}
      >
        {block.bulleted_list_item.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))}
      </li>
      {block.has_children && block.Children && (
        <ul className={`bulleted-list-nested ${style}`}>
          <RenderBlock
            blocks={block.Children}
            blockComponentMap={blockComponentMap}
          />
        </ul>
      )}
    </Root>
  );
};
