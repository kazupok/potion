import { getClassNameBlockId } from "potion-core/helpers";
import type { ParagraphBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { snakeToKebab } from "potion-core/utils";
import { RichTextRenderer } from "./RichTextRenderer";

export const Paragraph: ParagraphBlockProps = ({
  block,
  blockComponentMap,
}) => {
  return (
    <p
      className={`paragraph ${getClassNameBlockId(block)} ${snakeToKebab(block.paragraph.color)}`}
    >
      {block.paragraph.rich_text.length ? (
        block.paragraph.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))
      ) : (
        <br />
      )}
      {block.Children && (
        <RenderBlock
          blocks={block.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </p>
  );
};
