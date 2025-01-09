import { getClassNameBlockId } from "potion-core/helpers";
import type { QuoteBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { snakeToKebab } from "potion-core/utils";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

export const Quote: QuoteBlockProps = ({ block, blockComponentMap }) => {
  return (
    <blockquote
      className={`quote ${getClassNameBlockId(block)} ${snakeToKebab(block.quote.color)}`}
    >
      {block.quote.rich_text.map((richText, index) => (
        <RichTextRenderer key={index} richText={richText} />
      ))}
      {block.Children && (
        <RenderBlock
          blocks={block.Children}
          blockComponentMap={blockComponentMap}
        />
      )}
    </blockquote>
  );
};
