import { getClassNameBlockId } from "potion-core/helpers";
import { snakeToKebab } from "potion-core/utils";
import React, { FC } from "react";
import type { ToDoBlockProps } from "../../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { RichText } from "../../annotations";

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
