import "./styles.css";
import { getClassNameBlockId } from "potion-core/helpers";
import { snakeToKebab } from "potion-core/utils";
import type { CalloutBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

export const Callout: CalloutBlockProps = ({ block, blockComponentMap }) => {
  return (
    <div
      className={`callout ${getClassNameBlockId(block)} ${snakeToKebab(block.callout.color)}`}
    >
      {block.callout.icon && (
        <div className="callout-icon">
          {block.callout.icon.type === "emoji" ? (
            block.callout.icon.emoji
          ) : block.callout.icon.type === "external" ? (
            <img
              src={block.callout.icon.external.url}
              alt="Icon in a callout block"
            />
          ) : block.callout.icon.type === "file" ? (
            <img
              src={block.callout.icon.file.url}
              alt="Icon in a callout block"
            />
          ) : (
            <></>
          )}
        </div>
      )}
      <div className="callout-content">
        {block.callout.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))}
        {block.Children && (
          <RenderBlock
            blocks={block.Children}
            blockComponentMap={blockComponentMap}
          />
        )}
      </div>
    </div>
  );
};
