import { getClassNameBlockId } from "potion-core";
import { snakeToKebab } from "potion-core";
import { FC } from "react";
import type { ToDoBlockProps } from "../../../types/blocks-types";
import { RichText } from "../annotations";
import { RenderBlock } from "../common/RenderBlock";
export const ToDo: FC<ToDoBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  return (
    <div
      className={`ptn-blk-blocks-todo ${getClassNameBlockId(blockObject)} ${snakeToKebab(blockObject.to_do.color)}`}
    >
      <input
        type="checkbox"
        checked={blockObject.to_do.checked}
        disabled
        className="ptn-blk-blocks-todo-checkbox"
      />
      {blockObject.to_do.rich_text.map((richText, index) => {
        if (blockObject.to_do.checked) {
          return (
            <s key={index} className="ptn-blk-blocks-todo-checked">
              <RichText richText={richText} />
            </s>
          );
        }
        return <RichText key={index} richText={richText} />;
      })}
      {blockObject.Children && (
        <RenderBlock
          blockObjects={blockObject.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </div>
  );
};
