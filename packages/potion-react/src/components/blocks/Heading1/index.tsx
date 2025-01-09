import { getClassNameBlockId, getHeadingId } from "potion-core/helpers";
import type { Heading1BlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

export const Heading1: Heading1BlockProps = ({ block, blockComponentMap }) => {
  const isToggleable = block.heading_1.is_toggleable;
  const headingId = getHeadingId(block);

  if (isToggleable && block.Children) {
    return (
      <details className={`heading-1-container ${getClassNameBlockId(block)}`}>
        <summary className="heading-1 heading-toggle">
          <a href={`#${headingId}`} id={headingId} className="heading-link">
            <h3 className={getClassNameBlockId(block)}>
              {block.heading_1.rich_text.map((richText, index) => (
                <RichTextRenderer key={index} richText={richText} />
              ))}
            </h3>
          </a>
        </summary>
        <div className="heading-toggle-content">
          {block.Children && (
            <RenderBlock
              blocks={block.Children}
              blockComponentMap={blockComponentMap}
            />
          )}
        </div>
      </details>
    );
  }

  return (
    <a href={`#${headingId}`} id={headingId}>
      <h3
        className={`heading-1 heading-1-container ${getClassNameBlockId(block)}`}
      >
        {block.heading_1.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))}
      </h3>
    </a>
  );
};
