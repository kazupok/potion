import { getClassNameBlockId } from "potion-core/helpers";
import { snakeToKebab } from "potion-core/utils";
import type { ToDoBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";

export const ToDo: ToDoBlockProps = ({ block, blockComponentMap }) => {
  return (
    <div
      className={`todo ${getClassNameBlockId(block)} ${snakeToKebab(block.to_do.color)}`}
    >
      <input
        type="checkbox"
        checked={block.to_do.checked}
        disabled
        className="todo-checkbox"
      />
      {block.to_do.rich_text.map((richText, index) => {
        if (block.to_do.checked) {
          return (
            <s key={index} className="todo-checked">
              <RichTextRenderer richText={richText} />
            </s>
          );
        }
        return <RichTextRenderer key={index} richText={richText} />;
      })}
      {block.Children && (
        <RenderBlock
          blocks={block.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </div>
  );
};
