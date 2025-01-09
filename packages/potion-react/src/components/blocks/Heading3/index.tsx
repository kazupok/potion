import { getClassNameBlockId, getHeadingId } from "potion-core/helpers";
import type { Heading3BlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

export const Heading3: Heading3BlockProps = ({ block, blockComponentMap }) => {
  const isToggleable = block.heading_3.is_toggleable;
  const headingId = getHeadingId(block);

  if (isToggleable && block.Children) {
    return (
      <details className={`heading-3-container ${getClassNameBlockId(block)}`}>
        <summary className="heading-3 heading-toggle">
          <a href={`#${headingId}`} id={headingId} className="heading-link">
            <h5 className={getClassNameBlockId(block)}>
              {block.heading_3.rich_text.map((richText, index) => (
                <RichTextRenderer key={index} richText={richText} />
              ))}
            </h5>
          </a>
        </summary>
        <div className="heading-toggle-content">
          <RenderBlock
            blocks={block.Children}
            blockComponentMap={blockComponentMap}
          />
        </div>
      </details>
    );
  }

  return (
    <a href={`#${headingId}`} id={headingId}>
      <h5
        className={`heading-3 heading-3-container ${getClassNameBlockId(block)}`}
      >
        {block.heading_3.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))}
      </h5>
    </a>
  );
};
