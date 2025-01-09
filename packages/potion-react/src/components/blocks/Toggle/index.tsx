import { getClassNameBlockId } from "potion-core/helpers";
import type { ToggleBlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

export const Toggle: ToggleBlockProps = ({ block, blockComponentMap }) => {
  return (
    <details className={`toggle ${getClassNameBlockId(block)}`}>
      <summary className="toggle-summary">
        {block.toggle.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))}
      </summary>
      <div className="toggle-content">
        {block.Children && (
          <RenderBlock
            blocks={block.Children}
            blockComponentMap={blockComponentMap}
          />
        )}
      </div>
    </details>
  );
};
