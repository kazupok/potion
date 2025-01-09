import { getClassNameBlockId } from "potion-core/helpers";
import type { NumberedListItemBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { snakeToKebab } from "potion-core/utils";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

const listStyles = [
  "numbered-list",
  "numbered-list--alpha",
  "numbered-list--roman",
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

  return <ol className={`${listStyle} ${className || ""}`}>{children}</ol>;
};

export const NumberedListItem: NumberedListItemBlockProps = ({
  block,
  blockComponentMap,
}) => {
  const level = block.Level;
  const listStyle = listStyles[level % listLength];

  return (
    <Root level={level} className={getClassNameBlockId(block)}>
      <li
        className={`numbered-list-item ${snakeToKebab(block.numbered_list_item.color)}`}
      >
        {block.numbered_list_item.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))}
      </li>
      {block.has_children && block.Children && (
        <ol className={`numbered-list-nested ${listStyle}`}>
          <RenderBlock
            blocks={block.Children}
            blockComponentMap={blockComponentMap}
          />
        </ol>
      )}
    </Root>
  );
};
